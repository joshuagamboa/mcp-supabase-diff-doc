// A simple mock implementation of the MCP server for development purposes
class McpServer {
    constructor(options) {
        this.options = options || {};
        this.logger = options.logger || console;
        this.tools = options.tools || [];
        this.handlers = new Map();
        
        // Create middleware function
        this.middleware = (req, res, next) => {
            if (req.method === 'POST') {
                const body = req.body;
                
                if (body && body.type === 'tools/call' && body.toolCall) {
                    const handler = this.handlers.get('tools/call');
                    if (handler) {
                        Promise.resolve(handler(body))
                            .then(result => {
                                res.json(result);
                            })
                            .catch(error => {
                                this.logger.error('Error in handler:', error);
                                res.status(500).json({
                                    status: 'error',
                                    result: {
                                        success: false,
                                        message: `Internal server error: ${error.message}`
                                    }
                                });
                            });
                    } else {
                        res.status(404).json({
                            status: 'error',
                            result: {
                                success: false,
                                message: 'No handler registered for tools/call'
                            }
                        });
                    }
                } else {
                    next();
                }
            } else {
                next();
            }
        };
    }
    
    handle(type, handler) {
        this.handlers.set(type, handler);
    }
}

module.exports = { McpServer };
