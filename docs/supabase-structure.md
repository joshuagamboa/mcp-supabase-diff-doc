# Supabase Schema Structure

*Generated at: 2025-04-28T06:46:44.509Z*

This document contains the complete DDL structure of the database schema.

```sql
--
-- PostgreSQL database dump
--

-- Dumped from database version 15.8
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: _realtime; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA _realtime;


--
-- Name: accounts; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA accounts;


--
-- Name: admin; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA admin;


--
-- Name: auth; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA auth;


--
-- Name: pg_cron; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION pg_cron; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pg_cron IS 'Job scheduler for PostgreSQL';


--
-- Name: extensions; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA extensions;


--
-- Name: graphql; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA graphql;


--
-- Name: graphql_public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA graphql_public;


--
-- Name: pg_net; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;


--
-- Name: EXTENSION pg_net; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pg_net IS 'Async HTTP';


--
-- Name: pgbouncer; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA pgbouncer;


--
-- Name: properties; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA properties;


--
-- Name: realtime; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA realtime;


--
-- Name: storage; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA storage;


--
-- Name: supabase_functions; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA supabase_functions;


--
-- Name: supabase_migrations; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA supabase_migrations;


--
-- Name: system; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA system;


--
-- Name: vault; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA vault;


--
-- Name: pg_graphql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_graphql WITH SCHEMA graphql;


--
-- Name: EXTENSION pg_graphql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pg_graphql IS 'pg_graphql: GraphQL support';


--
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA extensions;


--
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pg_stat_statements IS 'track planning and execution statistics of all SQL statements executed';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: pgjwt; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgjwt WITH SCHEMA extensions;


--
-- Name: EXTENSION pgjwt; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pgjwt IS 'JSON Web Token API for Postgresql';


--
-- Name: postgis; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;


--
-- Name: EXTENSION postgis; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION postgis IS 'PostGIS geometry and geography spatial types and functions';


--
-- Name: supabase_vault; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS supabase_vault WITH SCHEMA vault;


--
-- Name: EXTENSION supabase_vault; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION supabase_vault IS 'Supabase Vault Extension';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA extensions;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: vector; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS vector WITH SCHEMA public;


--
-- Name: EXTENSION vector; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION vector IS 'vector data type and ivfflat and hnsw access methods';


--
-- Name: aal_level; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.aal_level AS ENUM (
    'aal1',
    'aal2',
    'aal3'
);


--
-- Name: code_challenge_method; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.code_challenge_method AS ENUM (
    's256',
    'plain'
);


--
-- Name: factor_status; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.factor_status AS ENUM (
    'unverified',
    'verified'
);


--
-- Name: factor_type; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.factor_type AS ENUM (
    'totp',
    'webauthn',
    'phone'
);


--
-- Name: one_time_token_type; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.one_time_token_type AS ENUM (
    'confirmation_token',
    'reauthentication_token',
    'recovery_token',
    'email_change_token_new',
    'email_change_token_current',
    'phone_change_token'
);


--
-- Name: action; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.action AS ENUM (
    'INSERT',
    'UPDATE',
    'DELETE',
    'TRUNCATE',
    'ERROR'
);


--
-- Name: equality_op; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.equality_op AS ENUM (
    'eq',
    'neq',
    'lt',
    'lte',
    'gt',
    'gte',
    'in'
);


--
-- Name: user_defined_filter; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.user_defined_filter AS (
	column_name text,
	op realtime.equality_op,
	value text
);


--
-- Name: wal_column; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.wal_column AS (
	name text,
	type_name text,
	type_oid oid,
	value jsonb,
	is_pkey boolean,
	is_selectable boolean
);


--
-- Name: wal_rls; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.wal_rls AS (
	wal jsonb,
	is_rls_enabled boolean,
	subscription_ids uuid[],
	errors text[]
);


--
-- Name: admin_approve_listing(uuid, uuid, text); Type: FUNCTION; Schema: admin; Owner: -
--

CREATE FUNCTION admin.admin_approve_listing(p_listing_id uuid, p_admin_id uuid, p_comment text DEFAULT NULL::text) RETURNS boolean
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'admin', 'properties', 'public'
    AS $$
  DECLARE
    v_admin_role TEXT;
    v_comment_id UUID;
  BEGIN
    -- Check if user is admin or moderator
    SELECT role INTO v_admin_role
    FROM accounts.user_profiles
    WHERE user_id = p_admin_id;
    
    IF v_admin_role NOT IN ('admin', 'moderator') THEN
      RAISE EXCEPTION 'Only admins and moderators can approve listings';
    END IF;
    
    -- Update listing status
    UPDATE properties.listings
    SET 
      status = 'approved',
      approved_at = NOW(),
      approved_by = p_admin_id
    WHERE id = p_listing_id;
    
    -- Add comment if provided
    IF p_comment IS NOT NULL AND p_comment != '' THEN
      INSERT INTO properties.listing_comments (
        listing_id,
        comment_type,
        comments,
        created_by
      ) VALUES (
        p_listing_id,
        'moderation',
        p_comment,
        p_admin_id
      )
      RETURNING id INTO v_comment_id;
    END IF;
    
    RETURN TRUE;
  EXCEPTION
    WHEN OTHERS THEN
      RAISE EXCEPTION 'Error approving listing: %', SQLERRM;
      RETURN FALSE;
  END;
  $$;


--
-- Name: admin_reject_listing(uuid, uuid, text); Type: FUNCTION; Schema: admin; Owner: -
--

CREATE FUNCTION admin.admin_reject_listing(p_listing_id uuid, p_admin_id uuid, p_reason text) RETURNS boolean
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'admin', 'properties', 'public'
    AS $$
  DECLARE
    v_admin_role TEXT;
    v_comment_id UUID;
  BEGIN
    -- Check if user is admin or moderator
    SELECT role INTO v_admin_role
    FROM accounts.user_profiles
    WHERE user_id = p_admin_id;
    
    IF v_admin_role NOT IN ('admin', 'moderator') THEN
      RAISE EXCEPTION 'Only admins and moderators can reject listings';
    END IF;
    
    -- Update listing status
    UPDATE properties.listings
    SET 
      status = 'rejected',
      rejected_at = NOW(),
      rejected_by = p_admin_id
    WHERE id = p_listing_id;
    
    -- Add rejection reason as comment
    INSERT INTO properties.listing_comments (
      listing_id,
      comment_type,
      comments,
      created_by
    ) VALUES (
      p_listing_id,
      'rejection',
      p_reason,
      p_admin_id
    )
    RETURNING id INTO v_comment_id;
    
    RETURN TRUE;
  EXCEPTION
    WHEN OTHERS THEN
      RAISE EXCEPTION 'Error rejecting listing: %', SQLERRM;
      RETURN FALSE;
  END;
  $$;


--
-- Name: email(); Type: FUNCTION; Schema: auth; Owner: -
--

CREATE FUNCTION auth.email() RETURNS text
    LANGUAGE sql STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.email', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'email')
  )::text
$$;


--
-- Name: FUNCTION email(); Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON FUNCTION auth.email() IS 'Deprecated. Use auth.jwt() -> ''email'' instead.';


--
-- Name: jwt(); Type: FUNCTION; Schema: auth; Owner: -
--

CREATE FUNCTION auth.jwt() RETURNS jsonb
    LANGUAGE sql STABLE
    AS $$
  select 
    coalesce(
        nullif(current_setting('request.jwt.claim', true), ''),
        nullif(current_setting('request.jwt.claims', true), '')
    )::jsonb
$$;


--
-- Name: role(); Type: FUNCTION; Schema: auth; Owner: -
--

CREATE FUNCTION auth.role() RETURNS text
    LANGUAGE sql STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.role', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'role')
  )::text
$$;


--
-- Name: FUNCTION role(); Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON FUNCTION auth.role() IS 'Deprecated. Use auth.jwt() -> ''role'' instead.';


--
-- Name: uid(); Type: FUNCTION; Schema: auth; Owner: -
--

CREATE FUNCTION auth.uid() RETURNS uuid
    LANGUAGE sql STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.sub', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
  )::uuid
$$;


--
-- Name: FUNCTION uid(); Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON FUNCTION auth.uid() IS 'Deprecated. Use auth.jwt() -> ''sub'' instead.';


--
-- Name: grant_pg_cron_access(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.grant_pg_cron_access() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  IF EXISTS (
    SELECT
    FROM pg_event_trigger_ddl_commands() AS ev
    JOIN pg_extension AS ext
    ON ev.objid = ext.oid
    WHERE ext.extname = 'pg_cron'
  )
  THEN
    grant usage on schema cron to postgres with grant option;

    alter default privileges in schema cron grant all on tables to postgres with grant option;
    alter default privileges in schema cron grant all on functions to postgres with grant option;
    alter default privileges in schema cron grant all on sequences to postgres with grant option;

    alter default privileges for user supabase_admin in schema cron grant all
        on sequences to postgres with grant option;
    alter default privileges for user supabase_admin in schema cron grant all
        on tables to postgres with grant option;
    alter default privileges for user supabase_admin in schema cron grant all
        on functions to postgres with grant option;

    grant all privileges on all tables in schema cron to postgres with grant option;
    revoke all on table cron.job from postgres;
    grant select on table cron.job to postgres with grant option;
  END IF;
END;
$$;


--
-- Name: FUNCTION grant_pg_cron_access(); Type: COMMENT; Schema: extensions; Owner: -
--

COMMENT ON FUNCTION extensions.grant_pg_cron_access() IS 'Grants access to pg_cron';


--
-- Name: grant_pg_graphql_access(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.grant_pg_graphql_access() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $_$
DECLARE
    func_is_graphql_resolve bool;
BEGIN
    func_is_graphql_resolve = (
        SELECT n.proname = 'resolve'
        FROM pg_event_trigger_ddl_commands() AS ev
        LEFT JOIN pg_catalog.pg_proc AS n
        ON ev.objid = n.oid
    );

    IF func_is_graphql_resolve
    THEN
        -- Update public wrapper to pass all arguments through to the pg_graphql resolve func
        DROP FUNCTION IF EXISTS graphql_public.graphql;
        create or replace function graphql_public.graphql(
            "operationName" text default null,
            query text default null,
            variables jsonb default null,
            extensions jsonb default null
        )
            returns jsonb
            language sql
        as $$
            select graphql.resolve(
                query := query,
                variables := coalesce(variables, '{}'),
                "operationName" := "operationName",
                extensions := extensions
            );
        $$;

        -- This hook executes when `graphql.resolve` is created. That is not necessarily the last
        -- function in the extension so we need to grant permissions on existing entities AND
        -- update default permissions to any others that are created after `graphql.resolve`
        grant usage on schema graphql to postgres, anon, authenticated, service_role;
        grant select on all tables in schema graphql to postgres, anon, authenticated, service_role;
        grant execute on all functions in schema graphql to postgres, anon, authenticated, service_role;
        grant all on all sequences in schema graphql to postgres, anon, authenticated, service_role;
        alter default privileges in schema graphql grant all on tables to postgres, anon, authenticated, service_role;
        alter default privileges in schema graphql grant all on functions to postgres, anon, authenticated, service_role;
        alter default privileges in schema graphql grant all on sequences to postgres, anon, authenticated, service_role;

        -- Allow postgres role to allow granting usage on graphql and graphql_public schemas to custom roles
        grant usage on schema graphql_public to postgres with grant option;
        grant usage on schema graphql to postgres with grant option;
    END IF;

END;
$_$;


--
-- Name: FUNCTION grant_pg_graphql_access(); Type: COMMENT; Schema: extensions; Owner: -
--

COMMENT ON FUNCTION extensions.grant_pg_graphql_access() IS 'Grants access to pg_graphql';


--
-- Name: grant_pg_net_access(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.grant_pg_net_access() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_event_trigger_ddl_commands() AS ev
    JOIN pg_extension AS ext
    ON ev.objid = ext.oid
    WHERE ext.extname = 'pg_net'
  )
  THEN
    GRANT USAGE ON SCHEMA net TO supabase_functions_admin, postgres, anon, authenticated, service_role;

    ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;
    ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;

    ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;
    ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;

    REVOKE ALL ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;
    REVOKE ALL ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;

    GRANT EXECUTE ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
    GRANT EXECUTE ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
  END IF;
END;
$$;


--
-- Name: FUNCTION grant_pg_net_access(); Type: COMMENT; Schema: extensions; Owner: -
--

COMMENT ON FUNCTION extensions.grant_pg_net_access() IS 'Grants access to pg_net';


--
-- Name: pgrst_ddl_watch(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.pgrst_ddl_watch() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  cmd record;
BEGIN
  FOR cmd IN SELECT * FROM pg_event_trigger_ddl_commands()
  LOOP
    IF cmd.command_tag IN (
      'CREATE SCHEMA', 'ALTER SCHEMA'
    , 'CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO', 'ALTER TABLE'
    , 'CREATE FOREIGN TABLE', 'ALTER FOREIGN TABLE'
    , 'CREATE VIEW', 'ALTER VIEW'
    , 'CREATE MATERIALIZED VIEW', 'ALTER MATERIALIZED VIEW'
    , 'CREATE FUNCTION', 'ALTER FUNCTION'
    , 'CREATE TRIGGER'
    , 'CREATE TYPE', 'ALTER TYPE'
    , 'CREATE RULE'
    , 'COMMENT'
    )
    -- don't notify in case of CREATE TEMP table or other objects created on pg_temp
    AND cmd.schema_name is distinct from 'pg_temp'
    THEN
      NOTIFY pgrst, 'reload schema';
    END IF;
  END LOOP;
END; $$;


--
-- Name: pgrst_drop_watch(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.pgrst_drop_watch() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  obj record;
BEGIN
  FOR obj IN SELECT * FROM pg_event_trigger_dropped_objects()
  LOOP
    IF obj.object_type IN (
      'schema'
    , 'table'
    , 'foreign table'
    , 'view'
    , 'materialized view'
    , 'function'
    , 'trigger'
    , 'type'
    , 'rule'
    )
    AND obj.is_temporary IS false -- no pg_temp objects
    THEN
      NOTIFY pgrst, 'reload schema';
    END IF;
  END LOOP;
END; $$;


--
-- Name: set_graphql_placeholder(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.set_graphql_placeholder() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $_$
    DECLARE
    graphql_is_dropped bool;
    BEGIN
    graphql_is_dropped = (
        SELECT ev.schema_name = 'graphql_public'
        FROM pg_event_trigger_dropped_objects() AS ev
        WHERE ev.schema_name = 'graphql_public'
    );

    IF graphql_is_dropped
    THEN
        create or replace function graphql_public.graphql(
            "operationName" text default null,
            query text default null,
            variables jsonb default null,
            extensions jsonb default null
        )
            returns jsonb
            language plpgsql
        as $$
            DECLARE
                server_version float;
            BEGIN
                server_version = (SELECT (SPLIT_PART((select version()), ' ', 2))::float);

                IF server_version >= 14 THEN
                    RETURN jsonb_build_object(
                        'errors', jsonb_build_array(
                            jsonb_build_object(
                                'message', 'pg_graphql extension is not enabled.'
                            )
                        )
                    );
                ELSE
                    RETURN jsonb_build_object(
                        'errors', jsonb_build_array(
                            jsonb_build_object(
                                'message', 'pg_graphql is only available on projects running Postgres 14 onwards.'
                            )
                        )
                    );
                END IF;
            END;
        $$;
    END IF;

    END;
$_$;


--
-- Name: FUNCTION set_graphql_placeholder(); Type: COMMENT; Schema: extensions; Owner: -
--

COMMENT ON FUNCTION extensions.set_graphql_placeholder() IS 'Reintroduces placeholder function for graphql_public.graphql';


--
-- Name: get_auth(text); Type: FUNCTION; Schema: pgbouncer; Owner: -
--

CREATE FUNCTION pgbouncer.get_auth(p_usename text) RETURNS TABLE(username text, password text)
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
BEGIN
    RAISE WARNING 'PgBouncer auth request: %', p_usename;

    RETURN QUERY
    SELECT usename::TEXT, passwd::TEXT FROM pg_catalog.pg_shadow
    WHERE usename = p_usename;
END;
$$;


--
-- Name: check_salesperson_broker_match(); Type: FUNCTION; Schema: properties; Owner: -
--

CREATE FUNCTION properties.check_salesperson_broker_match() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
  BEGIN
    IF EXISTS (
      SELECT 1 FROM accounts.user_profiles
      WHERE user_id = auth.uid()
      AND role = 'salesperson'
      AND broker_id = NEW.broker_id
      AND status = 'active'
    ) THEN
      RETURN NEW;
    END IF;
    RETURN NULL;
  END;
  $$;


--
-- Name: update_listing_approval_fields(); Type: FUNCTION; Schema: properties; Owner: -
--

CREATE FUNCTION properties.update_listing_approval_fields() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  -- Only update if status is changing to 'approved'
  IF NEW.status = 'approved' AND (OLD.status IS NULL OR OLD.status != 'approved') THEN
    NEW.approved_at = NOW();
    NEW.approved_by = auth.uid();
  END IF;
  RETURN NEW;
END;
$$;


--
-- Name: update_listing_rejection_fields(); Type: FUNCTION; Schema: properties; Owner: -
--

CREATE FUNCTION properties.update_listing_rejection_fields() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  -- Only update if status is changing to 'rejected'
  IF NEW.status = 'rejected' AND (OLD.status IS NULL OR OLD.status != 'rejected') THEN
    NEW.rejected_at = NOW();
    NEW.rejected_by = auth.uid();
  END IF;
  RETURN NEW;
END;
$$;


--
-- Name: update_modified_column(); Type: FUNCTION; Schema: properties; Owner: -
--

CREATE FUNCTION properties.update_modified_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
  BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
  END;
  $$;


--
-- Name: admin_approve_listing(uuid, boolean, text, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_approve_listing(listing_id uuid, make_public boolean DEFAULT true, comments text DEFAULT NULL::text, admin_user_id uuid DEFAULT auth.uid()) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
  v_listing RECORD;
  v_user_role TEXT;
  v_comment_id UUID;
  v_visibility TEXT;
BEGIN
  -- Check if user has admin role
  SELECT role INTO v_user_role
  FROM public.user_profiles
  WHERE user_id = admin_user_id;

  IF v_user_role IS NULL OR (v_user_role != 'admin' AND v_user_role != 'moderator') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Forbidden: Admin access required',
      'status', 403
    );
  END IF;

  -- Check if listing exists
  SELECT * INTO v_listing
  FROM properties.listings
  WHERE id = listing_id;

  IF v_listing IS NULL THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Listing not found',
      'status', 404
    );
  END IF;

  -- Determine visibility
  v_visibility := CASE WHEN make_public THEN 'public' ELSE 'private' END;

  -- Update listing status to approved
  UPDATE properties.listings
  SET 
    status = 'approved',
    visibility = v_visibility,
    approved_at = NOW(),
    approved_by = admin_user_id,
    updated_at = NOW()
  WHERE id = listing_id
  RETURNING * INTO v_listing;

  -- Add moderation comment if provided
  IF comments IS NOT NULL AND comments != '' THEN
    INSERT INTO properties.listing_comments (
      listing_id,
      created_by,
      comment,
      comment_type,
      created_at
    ) VALUES (
      listing_id,
      admin_user_id,
      comments,
      'moderation',
      NOW()
    )
    RETURNING id INTO v_comment_id;
  END IF;

  RETURN jsonb_build_object(
    'success', true,
    'message', 'Listing approved',
    'listing', row_to_json(v_listing),
    'comment_id', v_comment_id,
    'status', 200
  );
END;
$$;


--
-- Name: admin_create_user(text, text, text, text, uuid, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_create_user(p_email text, p_full_name text, p_role text DEFAULT 'user'::text, p_prc_number text DEFAULT NULL::text, p_broker_id uuid DEFAULT NULL::uuid, p_status text DEFAULT 'active'::text) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_user_role TEXT;
  v_user_id UUID;
  v_existing_user_id UUID;
BEGIN
  -- Check if user has admin role
  SELECT role INTO v_user_role
  FROM public.user_profiles
  WHERE user_id = auth.uid();

  IF v_user_role IS NULL OR (v_user_role != 'admin' AND v_user_role != 'moderator') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Forbidden: Admin access required',
      'status', 403
    );
  END IF;

  -- Check if email already exists
  SELECT user_id INTO v_existing_user_id
  FROM public.user_profiles
  WHERE email = p_email;

  IF v_existing_user_id IS NOT NULL THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Email already exists',
      'status', 400
    );
  END IF;

  -- Validate role
  IF p_role NOT IN ('user', 'broker', 'salesperson', 'buyer', 'moderator', 'admin') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Invalid role',
      'status', 400
    );
  END IF;

  -- Validate status
  IF p_status NOT IN ('active', 'pending', 'inactive') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Invalid status',
      'status', 400
    );
  END IF;

  -- Create user in auth.users
  -- Note: In a real implementation, this would involve creating a user in auth.users
  -- and then creating a profile. For this example, we'll just create a profile.
  v_user_id := gen_random_uuid();

  -- Create user profile
  INSERT INTO public.user_profiles (
    user_id,
    email,
    full_name,
    role,
    prc_number,
    broker_id,
    status,
    created_at,
    updated_at
  ) VALUES (
    v_user_id,
    p_email,
    p_full_name,
    p_role,
    CASE WHEN p_role = 'broker' THEN p_prc_number ELSE NULL END,
    CASE WHEN p_role = 'salesperson' THEN p_broker_id ELSE NULL END,
    p_status,
    NOW(),
    NOW()
  );

  -- Return success
  RETURN jsonb_build_object(
    'success', true,
    'message', 'User created successfully',
    'user_id', v_user_id,
    'status', 201
  );
END;
$$;


--
-- Name: admin_get_active_brokers(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_active_brokers() RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_user_role TEXT;
  v_brokers JSONB;
BEGIN
  -- Check if user has admin role
  SELECT role INTO v_user_role
  FROM public.user_profiles
  WHERE user_id = auth.uid();

  IF v_user_role IS NULL OR (v_user_role != 'admin' AND v_user_role != 'moderator') THEN
    RAISE EXCEPTION 'Forbidden: Admin access required';
  END IF;

  -- Use a direct SELECT with jsonb_agg to avoid GROUP BY issues
  SELECT jsonb_agg(
    jsonb_build_object(
      'user_id', up.user_id,
      'full_name', up.full_name,
      'email', up.email,
      'prc_number', up.prc_number
    )
  )
  INTO v_brokers
  FROM (
    SELECT 
      user_id,
      full_name,
      email,
      prc_number
    FROM public.user_profiles
    WHERE role = 'broker' AND status = 'active'
    ORDER BY full_name
  ) up;

  -- Return the result
  RETURN COALESCE(v_brokers, '[]'::jsonb);
END;
$$;


--
-- Name: admin_get_active_brokers_count(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_active_brokers_count() RETURNS integer
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  RETURN (
    SELECT COUNT(*)
    FROM accounts.user_profiles
    WHERE role = 'broker' AND status = 'active'
  );
END;
$$;


--
-- Name: admin_get_all_dashboard_stats(date); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_all_dashboard_stats(first_day_of_month date DEFAULT (date_trunc('month'::text, (CURRENT_DATE)::timestamp with time zone))::date) RETURNS json
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_user_stats JSON;
  v_active_brokers_count INTEGER;
  v_user_role_distribution JSON;
  v_user_status_distribution JSON;
  v_listing_stats JSON;
  v_pending_moderation_count INTEGER;
  v_listing_status_distribution JSON;
  v_listing_type_distribution JSON;
BEGIN
  -- Get user statistics
  SELECT * FROM public.admin_get_user_stats(first_day_of_month) INTO v_user_stats;
  
  -- Get active brokers count
  SELECT public.admin_get_active_brokers_count() INTO v_active_brokers_count;
  
  -- Get user role distribution
  SELECT public.admin_get_user_distribution_by_role() INTO v_user_role_distribution;
  
  -- Get user status distribution
  SELECT public.admin_get_user_distribution_by_status() INTO v_user_status_distribution;
  
  -- Get listing statistics
  SELECT * FROM public.admin_get_listing_stats(first_day_of_month) INTO v_listing_stats;
  
  -- Get pending moderation count
  SELECT public.admin_get_moderation_listings_count() INTO v_pending_moderation_count;
  
  -- Get listing status distribution
  SELECT public.admin_get_listing_distribution_by_status() INTO v_listing_status_distribution;
  
  -- Get listing type distribution
  SELECT public.admin_get_listing_distribution_by_type() INTO v_listing_type_distribution;

  -- Combine all statistics
  RETURN json_build_object(
    'user_stats', v_user_stats,
    'active_brokers_count', v_active_brokers_count,
    'user_role_distribution', v_user_role_distribution,
    'user_status_distribution', v_user_status_distribution,
    'listing_stats', v_listing_stats,
    'pending_moderation_count', v_pending_moderation_count,
    'listing_status_distribution', v_listing_status_distribution,
    'listing_type_distribution', v_listing_type_distribution
  );
END;
$$;


--
-- Name: admin_get_listing_comments(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_listing_comments(p_listing_id uuid) RETURNS TABLE(id uuid, comment text, comment_type text, created_at timestamp with time zone, created_by uuid, user_role text, user_full_name text)
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
BEGIN
  -- Check if user has admin role
  IF NOT EXISTS (
    SELECT 1
    FROM public.user_profiles
    WHERE user_id = auth.uid() AND role IN ('admin', 'moderator')
  ) THEN
    RAISE EXCEPTION 'Forbidden: Admin access required';
  END IF;

  RETURN QUERY
  SELECT 
    lc.id,
    lc.comment,
    lc.comment_type,
    lc.created_at,
    lc.created_by,
    up.role AS user_role,
    up.full_name AS user_full_name
  FROM 
    properties.listing_comments lc
  LEFT JOIN 
    public.user_profiles up ON lc.created_by = up.user_id
  WHERE 
    lc.listing_id = p_listing_id
  ORDER BY 
    lc.created_at DESC;
END;
$$;


--
-- Name: admin_get_listing_distribution_by_status(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_listing_distribution_by_status() RETURNS json
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_distribution JSON;
BEGIN
  SELECT json_agg(status_counts) INTO v_distribution
  FROM (
    SELECT 
      status,
      COUNT(*) as count
    FROM properties.listings
    GROUP BY status
    ORDER BY count DESC
  ) status_counts;

  RETURN COALESCE(v_distribution, '[]'::json);
END;
$$;


--
-- Name: admin_get_listing_distribution_by_type(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_listing_distribution_by_type() RETURNS json
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_distribution JSON;
BEGIN
  SELECT json_agg(type_counts) INTO v_distribution
  FROM (
    SELECT 
      pt.name as property_type,
      COUNT(*) as count
    FROM properties.listings l
    JOIN properties.property_types pt ON l.property_type_id = pt.id
    GROUP BY pt.name
    ORDER BY count DESC
  ) type_counts;

  RETURN COALESCE(v_distribution, '[]'::json);
END;
$$;


--
-- Name: admin_get_listing_stats(date); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_listing_stats(first_day_of_month date DEFAULT (date_trunc('month'::text, (CURRENT_DATE)::timestamp with time zone))::date) RETURNS json
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_total_listings INTEGER;
  v_new_listings_this_month INTEGER;
BEGIN
  -- Get total listings
  SELECT COUNT(*) INTO v_total_listings
  FROM properties.listings;

  -- Get new listings this month
  SELECT COUNT(*) INTO v_new_listings_this_month
  FROM properties.listings
  WHERE created_at >= first_day_of_month;

  RETURN json_build_object(
    'total_listings', v_total_listings,
    'new_listings_this_month', v_new_listings_this_month
  );
END;
$$;


--
-- Name: admin_get_listings(text, uuid, text, integer, integer); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_listings(p_status text DEFAULT NULL::text, p_property_type_id uuid DEFAULT NULL::uuid, p_search_query text DEFAULT NULL::text, p_limit integer DEFAULT 10, p_offset integer DEFAULT 0) RETURNS json
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_listings JSON;
  v_total_count INTEGER;
BEGIN
  -- Get total count
  SELECT COUNT(*) INTO v_total_count
  FROM properties.listings l
  JOIN properties.property_types pt ON l.property_type_id = pt.id
  WHERE 
    (p_status IS NULL OR l.status = p_status) AND
    (p_property_type_id IS NULL OR l.property_type_id = p_property_type_id) AND
    (p_search_query IS NULL OR 
      l.title ILIKE '%' || p_search_query || '%' OR 
      l.address ILIKE '%' || p_search_query || '%' OR
      l.city ILIKE '%' || p_search_query || '%' OR
      l.province ILIKE '%' || p_search_query || '%');

  -- Get listings
  SELECT json_build_object(
    'listings', COALESCE(json_agg(listing_with_details), '[]'::json),
    'total_count', v_total_count
  ) INTO v_listings
  FROM (
    SELECT 
      l.*,
      pt.name AS property_type_name,
      up.full_name AS creator_name,
      up.email AS creator_email,
      broker.full_name AS broker_name,
      broker.email AS broker_email,
      (
        SELECT url 
        FROM properties.property_media 
        WHERE listing_id = l.id AND is_primary = true 
        LIMIT 1
      ) AS primary_image_url
    FROM properties.listings l
    JOIN properties.property_types pt ON l.property_type_id = pt.id
    LEFT JOIN accounts.user_profiles up ON l.creator_id = up.user_id
    LEFT JOIN accounts.user_profiles broker ON l.broker_id = broker.user_id
    WHERE 
      (p_status IS NULL OR l.status = p_status) AND
      (p_property_type_id IS NULL OR l.property_type_id = p_property_type_id) AND
      (p_search_query IS NULL OR 
        l.title ILIKE '%' || p_search_query || '%' OR 
        l.address ILIKE '%' || p_search_query || '%' OR
        l.city ILIKE '%' || p_search_query || '%' OR
        l.province ILIKE '%' || p_search_query || '%')
    ORDER BY l.created_at DESC
    LIMIT p_limit
    OFFSET p_offset
  ) listing_with_details;

  RETURN v_listings;
END;
$$;


--
-- Name: admin_get_moderation_listings_count(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_moderation_listings_count() RETURNS integer
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  RETURN (
    SELECT COUNT(*)
    FROM properties.listings
    WHERE status = 'pending_moderation'
  );
END;
$$;


--
-- Name: admin_get_system_settings(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_system_settings() RETURNS json
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_settings JSON;
BEGIN
  -- Create the system.settings table if it doesn't exist
  BEGIN
    CREATE TABLE IF NOT EXISTS system.settings (
      key TEXT PRIMARY KEY,
      value TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  EXCEPTION WHEN OTHERS THEN
    -- Table might already exist or schema doesn't exist
    NULL;
  END;

  -- Get settings
  SELECT json_agg(s) INTO v_settings
  FROM system.settings s;

  RETURN COALESCE(v_settings, '[]'::json);
END;
$$;


--
-- Name: admin_get_user_by_id(text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_user_by_id(p_user_id text) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_user_role TEXT;
  v_user JSONB;
BEGIN
  -- Check if user has admin role
  SELECT role INTO v_user_role
  FROM public.user_profiles
  WHERE user_id = auth.uid();

  IF v_user_role IS NULL OR (v_user_role != 'admin' AND v_user_role != 'moderator') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Forbidden: Admin access required',
      'status', 403
    );
  END IF;

  -- Get user details
  SELECT jsonb_build_object(
    'id', up.id,
    'user_id', up.user_id,
    'email', up.email,
    'full_name', up.full_name,
    'role', up.role,
    'status', up.status,
    'created_at', up.created_at,
    'updated_at', up.updated_at,
    'prc_number', up.prc_number,
    'broker_id', up.broker_id,
    'broker_details', (
      SELECT jsonb_build_object(
        'user_id', b.user_id,
        'full_name', b.full_name,
        'email', b.email,
        'prc_number', b.prc_number
      )
      FROM public.user_profiles b
      WHERE b.user_id = up.broker_id::uuid
      LIMIT 1
    )
  )
  INTO v_user
  FROM public.user_profiles up
  WHERE up.user_id = p_user_id::uuid;

  -- Check if user exists
  IF v_user IS NULL THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'User not found',
      'status', 404
    );
  END IF;

  -- Return the result
  RETURN jsonb_build_object(
    'success', true,
    'user', v_user,
    'status', 200
  );
END;
$$;


--
-- Name: admin_get_user_distribution_by_role(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_user_distribution_by_role() RETURNS json
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_distribution JSON;
BEGIN
  SELECT json_agg(role_counts) INTO v_distribution
  FROM (
    SELECT 
      role,
      COUNT(*) as count
    FROM accounts.user_profiles
    GROUP BY role
    ORDER BY count DESC
  ) role_counts;

  RETURN COALESCE(v_distribution, '[]'::json);
END;
$$;


--
-- Name: admin_get_user_distribution_by_status(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_user_distribution_by_status() RETURNS json
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_distribution JSON;
BEGIN
  SELECT json_agg(status_counts) INTO v_distribution
  FROM (
    SELECT 
      status,
      COUNT(*) as count
    FROM accounts.user_profiles
    GROUP BY status
    ORDER BY count DESC
  ) status_counts;

  RETURN COALESCE(v_distribution, '[]'::json);
END;
$$;


--
-- Name: admin_get_user_stats(date); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_user_stats(first_day_of_month date DEFAULT (date_trunc('month'::text, (CURRENT_DATE)::timestamp with time zone))::date) RETURNS json
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_total_users INTEGER;
  v_new_users_this_month INTEGER;
BEGIN
  -- Get total users
  SELECT COUNT(*) INTO v_total_users
  FROM accounts.user_profiles;

  -- Get new users this month
  SELECT COUNT(*) INTO v_new_users_this_month
  FROM accounts.user_profiles
  WHERE created_at >= first_day_of_month;

  RETURN json_build_object(
    'total_users', v_total_users,
    'new_users_this_month', v_new_users_this_month
  );
END;
$$;


--
-- Name: admin_get_users(text, text, text, integer, integer); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_get_users(p_role text DEFAULT NULL::text, p_status text DEFAULT NULL::text, p_search_query text DEFAULT NULL::text, p_limit integer DEFAULT 10, p_offset integer DEFAULT 0) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_user_role TEXT;
  v_users JSONB;
  v_total_count INTEGER;
  v_query TEXT;
  v_count_query TEXT;
BEGIN
  -- Check if user has admin role
  SELECT role INTO v_user_role
  FROM public.user_profiles
  WHERE user_id = auth.uid();

  IF v_user_role IS NULL OR (v_user_role != 'admin' AND v_user_role != 'moderator') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Forbidden: Admin access required',
      'status', 403
    );
  END IF;

  -- Build the base query with filters
  v_query := '
    SELECT *
    FROM public.user_profiles
    WHERE 1=1';

  -- Add filters
  IF p_role IS NOT NULL THEN
    v_query := v_query || ' AND role = ' || quote_literal(p_role);
  END IF;

  IF p_status IS NOT NULL THEN
    v_query := v_query || ' AND status = ' || quote_literal(p_status);
  END IF;

  IF p_search_query IS NOT NULL THEN
    v_query := v_query || ' AND (
      email ILIKE ' || quote_literal('%' || p_search_query || '%') || ' OR
      full_name ILIKE ' || quote_literal('%' || p_search_query || '%') || ' OR
      prc_number ILIKE ' || quote_literal('%' || p_search_query || '%') || '
    )';
  END IF;

  -- Count query
  v_count_query := 'SELECT COUNT(*) FROM (' || v_query || ') AS filtered_count';
  EXECUTE v_count_query INTO v_total_count;

  -- Add ordering and pagination
  -- Sort by updated_at DESC first, then by created_at DESC
  v_query := v_query || ' ORDER BY updated_at DESC NULLS LAST, created_at DESC LIMIT ' || p_limit || ' OFFSET ' || p_offset;

  -- Execute the query
  EXECUTE 'SELECT jsonb_agg(u) FROM (' || v_query || ') u' INTO v_users;

  -- Return the result
  RETURN jsonb_build_object(
    'success', true,
    'users', COALESCE(v_users, '[]'::jsonb),
    'total_count', v_total_count,
    'status', 200
  );
END;
$$;


--
-- Name: admin_invalidate_prc_verification(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_invalidate_prc_verification(p_user_id uuid DEFAULT NULL::uuid) RETURNS integer
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_affected_rows INTEGER;
BEGIN
  IF p_user_id IS NULL THEN
    -- Invalidate for all users
    UPDATE accounts.user_profiles
    SET 
      prc_verified = FALSE,
      prc_verified_at = NULL,
      updated_at = NOW()
    WHERE role = 'broker' AND prc_verified = TRUE;
  ELSE
    -- Invalidate for specific user
    UPDATE accounts.user_profiles
    SET 
      prc_verified = FALSE,
      prc_verified_at = NULL,
      updated_at = NOW()
    WHERE user_id = p_user_id AND role = 'broker' AND prc_verified = TRUE;
  END IF;

  GET DIAGNOSTICS v_affected_rows = ROW_COUNT;
  RETURN v_affected_rows;
END;
$$;


--
-- Name: admin_reject_listing(uuid, text, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_reject_listing(listing_id uuid, comments text DEFAULT NULL::text, admin_user_id uuid DEFAULT auth.uid()) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
  v_listing RECORD;
  v_user_role TEXT;
  v_comment_id UUID;
BEGIN
  -- Check if user has admin role
  SELECT role INTO v_user_role
  FROM public.user_profiles
  WHERE user_id = admin_user_id;

  IF v_user_role IS NULL OR (v_user_role != 'admin' AND v_user_role != 'moderator') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Forbidden: Admin access required',
      'status', 403
    );
  END IF;

  -- Check if listing exists
  SELECT * INTO v_listing
  FROM properties.listings
  WHERE id = listing_id;

  IF v_listing IS NULL THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Listing not found',
      'status', 404
    );
  END IF;

  -- Update listing status to rejected
  UPDATE properties.listings
  SET 
    status = 'rejected',
    visibility = 'private',
    updated_at = NOW()
  WHERE id = listing_id
  RETURNING * INTO v_listing;

  -- Add moderation comment if provided
  IF comments IS NOT NULL AND comments != '' THEN
    INSERT INTO properties.listing_comments (
      listing_id,
      created_by,
      comment,
      comment_type,
      created_at
    ) VALUES (
      listing_id,
      admin_user_id,
      comments,
      'moderation',
      NOW()
    )
    RETURNING id INTO v_comment_id;
  END IF;

  RETURN jsonb_build_object(
    'success', true,
    'message', 'Listing rejected',
    'listing', row_to_json(v_listing),
    'comment_id', v_comment_id,
    'status', 200
  );
END;
$$;


--
-- Name: admin_request_changes_listing(uuid, text, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_request_changes_listing(listing_id uuid, comments text DEFAULT NULL::text, admin_user_id uuid DEFAULT auth.uid()) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
  v_listing RECORD;
  v_user_role TEXT;
  v_comment_id UUID;
BEGIN
  -- Check if user has admin role
  SELECT role INTO v_user_role
  FROM public.user_profiles
  WHERE user_id = admin_user_id;

  IF v_user_role IS NULL OR (v_user_role != 'admin' AND v_user_role != 'moderator') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Forbidden: Admin access required',
      'status', 403
    );
  END IF;

  -- Check if listing exists
  SELECT * INTO v_listing
  FROM properties.listings
  WHERE id = listing_id;

  IF v_listing IS NULL THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Listing not found',
      'status', 404
    );
  END IF;

  -- Update listing status to draft and visibility to private
  UPDATE properties.listings
  SET 
    status = 'draft',
    visibility = 'private',
    updated_at = NOW()
  WHERE id = listing_id
  RETURNING * INTO v_listing;

  -- Add moderation comment if provided
  IF comments IS NOT NULL AND comments != '' THEN
    INSERT INTO properties.listing_comments (
      listing_id,
      created_by,
      comment,
      comment_type,
      created_at
    ) VALUES (
      listing_id,
      admin_user_id,
      comments,
      'moderation',
      NOW()
    )
    RETURNING id INTO v_comment_id;
  END IF;

  RETURN jsonb_build_object(
    'success', true,
    'message', 'Listing sent back for changes',
    'listing', row_to_json(v_listing),
    'comment_id', v_comment_id,
    'status', 200
  );
END;
$$;


--
-- Name: admin_toggle_maintenance_mode(boolean); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_toggle_maintenance_mode(p_enabled boolean) RETURNS boolean
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  -- Create the system.settings table if it doesn't exist
  BEGIN
    CREATE TABLE IF NOT EXISTS system.settings (
      key TEXT PRIMARY KEY,
      value TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  EXCEPTION WHEN OTHERS THEN
    -- Table might already exist or schema doesn't exist
    NULL;
  END;

  -- Update maintenance mode setting
  IF EXISTS (SELECT 1 FROM system.settings WHERE key = 'maintenance_mode') THEN
    UPDATE system.settings
    SET 
      value = p_enabled::TEXT,
      updated_at = NOW()
    WHERE key = 'maintenance_mode';
  ELSE
    INSERT INTO system.settings (key, value)
    VALUES ('maintenance_mode', p_enabled::TEXT);
  END IF;

  RETURN TRUE;
END;
$$;


--
-- Name: admin_update_system_setting(text, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_update_system_setting(p_key text, p_value text) RETURNS boolean
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  -- Check if the setting exists
  IF EXISTS (SELECT 1 FROM system.settings WHERE key = p_key) THEN
    -- Update existing setting
    UPDATE system.settings
    SET 
      value = p_value,
      updated_at = NOW()
    WHERE key = p_key;
  ELSE
    -- Insert new setting
    INSERT INTO system.settings (key, value)
    VALUES (p_key, p_value);
  END IF;

  RETURN TRUE;
END;
$$;


--
-- Name: admin_update_user(uuid, text, text, text, uuid, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_update_user(p_user_id uuid, p_full_name text, p_role text, p_prc_number text DEFAULT NULL::text, p_broker_id uuid DEFAULT NULL::uuid, p_status text DEFAULT NULL::text) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_user_role TEXT;
  v_current_role TEXT;
  v_current_status TEXT;
  v_role_update_result JSONB;
  v_status_update_result JSONB;
BEGIN
  -- Check if user has admin role
  SELECT role INTO v_user_role
  FROM public.user_profiles
  WHERE user_id = auth.uid();

  IF v_user_role IS NULL OR (v_user_role != 'admin' AND v_user_role != 'moderator') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Forbidden: Admin access required',
      'status', 403
    );
  END IF;

  -- Get current role and status
  SELECT role, status INTO v_current_role, v_current_status
  FROM public.user_profiles
  WHERE user_id = p_user_id;

  -- If user not found, return error
  IF v_current_role IS NULL THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'User not found',
      'status', 404
    );
  END IF;

  -- Update role if it has changed
  IF p_role IS NOT NULL AND p_role != v_current_role THEN
    SELECT * INTO v_role_update_result
    FROM admin_update_user_role(p_user_id, p_role);

    IF NOT (v_role_update_result->>'success')::BOOLEAN THEN
      RETURN v_role_update_result;
    END IF;
  END IF;

  -- Update status if it has changed
  IF p_status IS NOT NULL AND p_status != v_current_status THEN
    SELECT * INTO v_status_update_result
    FROM admin_update_user_status(p_user_id, p_status);

    IF NOT (v_status_update_result->>'success')::BOOLEAN THEN
      RETURN v_status_update_result;
    END IF;
  END IF;

  -- Update other fields directly
  UPDATE public.user_profiles
  SET
    full_name = COALESCE(p_full_name, full_name),
    prc_number = CASE WHEN p_role = 'broker' THEN p_prc_number ELSE NULL END,
    broker_id = CASE WHEN p_role = 'salesperson' THEN p_broker_id ELSE NULL END,
    updated_at = NOW()
  WHERE user_id = p_user_id;

  -- Return success
  RETURN jsonb_build_object(
    'success', true,
    'message', 'User updated successfully',
    'status', 200
  );
END;
$$;


--
-- Name: admin_update_user_role(uuid, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_update_user_role(p_user_id uuid, p_role text) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_user_role TEXT;
BEGIN
  -- Check if user has admin role
  SELECT role INTO v_user_role
  FROM public.user_profiles
  WHERE user_id = auth.uid();

  IF v_user_role IS NULL OR (v_user_role != 'admin' AND v_user_role != 'moderator') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Forbidden: Admin access required',
      'status', 403
    );
  END IF;

  -- Validate role
  IF p_role NOT IN ('user', 'broker', 'salesperson', 'buyer', 'moderator', 'admin') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Invalid role. Must be one of: user, broker, salesperson, buyer, moderator, admin',
      'status', 400
    );
  END IF;

  -- Update user role
  UPDATE public.user_profiles
  SET 
    role = p_role,
    updated_at = NOW()
  WHERE user_id = p_user_id;

  -- Check if user was found and updated
  IF NOT FOUND THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'User not found',
      'status', 404
    );
  END IF;

  -- Return success
  RETURN jsonb_build_object(
    'success', true,
    'message', 'User role updated successfully',
    'status', 200
  );
END;
$$;


--
-- Name: admin_update_user_status(text, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_update_user_status(p_status text, p_user_id uuid) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_user_role TEXT;
BEGIN
  -- Check if user has admin role
  SELECT role INTO v_user_role
  FROM public.user_profiles
  WHERE user_id = auth.uid();

  IF v_user_role IS NULL OR (v_user_role != 'admin' AND v_user_role != 'moderator') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Forbidden: Admin access required',
      'status', 403
    );
  END IF;

  -- Validate status
  IF p_status NOT IN ('active', 'pending', 'inactive') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Invalid status. Must be one of: active, pending, inactive',
      'status', 400
    );
  END IF;

  -- Update user status
  UPDATE public.user_profiles
  SET
    status = p_status,
    updated_at = NOW()
  WHERE user_id = p_user_id;

  -- Check if user was found and updated
  IF NOT FOUND THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'User not found',
      'status', 404
    );
  END IF;

  -- Return success
  RETURN jsonb_build_object(
    'success', true,
    'message', 'User status updated successfully',
    'status', 200
  );
END;
$$;


--
-- Name: admin_update_user_status(uuid, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_update_user_status(p_user_id uuid, p_status text) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_user_role TEXT;
BEGIN
  -- Check if user has admin role
  SELECT role INTO v_user_role
  FROM public.user_profiles
  WHERE user_id = auth.uid();

  IF v_user_role IS NULL OR (v_user_role != 'admin' AND v_user_role != 'moderator') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Forbidden: Admin access required',
      'status', 403
    );
  END IF;

  -- Validate status
  IF p_status NOT IN ('active', 'pending', 'inactive') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Invalid status. Must be one of: active, pending, inactive',
      'status', 400
    );
  END IF;

  -- Update user status
  UPDATE public.user_profiles
  SET 
    status = p_status,
    updated_at = NOW()
  WHERE user_id = p_user_id;

  -- Check if user was found and updated
  IF NOT FOUND THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'User not found',
      'status', 404
    );
  END IF;

  -- Return success
  RETURN jsonb_build_object(
    'success', true,
    'message', 'User status updated successfully',
    'status', 200
  );
END;
$$;


--
-- Name: admin_update_user_status_by_id(uuid, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_update_user_status_by_id(p_user_id uuid, p_status text) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_user_role TEXT;
BEGIN
  -- Check if user has admin role
  SELECT role INTO v_user_role
  FROM public.user_profiles
  WHERE user_id = auth.uid();

  IF v_user_role IS NULL OR (v_user_role != 'admin' AND v_user_role != 'moderator') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Forbidden: Admin access required',
      'status', 403
    );
  END IF;

  -- Validate status
  IF p_status NOT IN ('active', 'pending', 'inactive') THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'Invalid status. Must be one of: active, pending, inactive',
      'status', 400
    );
  END IF;

  -- Update user status
  UPDATE public.user_profiles
  SET
    status = p_status,
    updated_at = NOW()
  WHERE user_id = p_user_id;

  -- Check if user was found and updated
  IF NOT FOUND THEN
    RETURN jsonb_build_object(
      'success', false,
      'message', 'User not found',
      'status', 404
    );
  END IF;

  -- Return success
  RETURN jsonb_build_object(
    'success', true,
    'message', 'User status updated successfully',
    'status', 200
  );
END;
$$;


--
-- Name: archive_conversation(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.archive_conversation(p_conversation_id uuid) RETURNS jsonb
    LANGUAGE plpgsql
    AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_conversation_exists BOOLEAN;
  v_updated BOOLEAN;
BEGIN
  -- Check if the conversation exists and the user is a participant
  SELECT EXISTS(
    SELECT 1 FROM public.conversations c
    WHERE c.id = p_conversation_id
    AND (c.buyer_id = v_user_id OR c.manager_id = v_user_id)
  ) INTO v_conversation_exists;

  IF NOT v_conversation_exists THEN
    RETURN jsonb_build_object('error', 'Conversation not found or you are not a participant');
  END IF;

  -- Archive the conversation
  UPDATE public.conversations
  SET status = 'archived'
  WHERE id = p_conversation_id
  AND (buyer_id = v_user_id OR manager_id = v_user_id)
  RETURNING TRUE INTO v_updated;

  IF v_updated THEN
    RETURN jsonb_build_object('status', 'archived');
  ELSE
    RETURN jsonb_build_object('error', 'Failed to archive conversation');
  END IF;
END;
$$;


--
-- Name: archive_message(uuid, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.archive_message(p_message_id uuid, p_user_id uuid) RETURNS boolean
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
  DECLARE
    v_conversation_id UUID;
    v_is_participant BOOLEAN;
  BEGIN
    -- Get the conversation ID
    SELECT conversation_id INTO v_conversation_id
    FROM messages
    WHERE id = p_message_id;
    
    -- Check if the user is a participant in the conversation
    SELECT EXISTS (
      SELECT 1 FROM conversations
      WHERE id = v_conversation_id
      AND (buyer_id = p_user_id OR manager_id = p_user_id)
    ) INTO v_is_participant;
    
    IF NOT v_is_participant THEN
      RAISE EXCEPTION 'User is not a participant in this conversation';
    END IF;
    
    -- Archive the message for this user
    IF p_user_id = (SELECT buyer_id FROM conversations WHERE id = v_conversation_id) THEN
      UPDATE messages
      SET is_archived_by_buyer = TRUE
      WHERE id = p_message_id;
    ELSE
      UPDATE messages
      SET is_archived_by_manager = TRUE
      WHERE id = p_message_id;
    END IF;
    
    RETURN TRUE;
  EXCEPTION
    WHEN OTHERS THEN
      RAISE EXCEPTION 'Error archiving message: %', SQLERRM;
      RETURN FALSE;
  END;
  $$;


--
-- Name: create_missing_user_profiles(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.create_missing_user_profiles() RETURNS TABLE(user_id uuid, email text, status text)
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
  DECLARE
    user_rec record;
    profile_exists boolean;
    error_message text;
  BEGIN
    FOR user_rec IN
      SELECT id, email
      FROM auth.users
      WHERE deleted_at IS NULL
      AND email != 'anon@example.com'
    LOOP
      BEGIN
        -- Check if profile already exists
        SELECT EXISTS (
          SELECT 1 FROM accounts.user_profiles
          WHERE user_id = user_rec.id
        ) INTO profile_exists;
        
        IF NOT profile_exists THEN
          -- Create profile
          PERFORM public.create_user_profile_in_accounts(
            user_rec.id,
            user_rec.email
          );
          
          user_id := user_rec.id;
          email := user_rec.email;
          status := 'created';
          RETURN NEXT;
        ELSE
          user_id := user_rec.id;
          email := user_rec.email;
          status := 'already exists';
          RETURN NEXT;
        END IF;
      EXCEPTION
        WHEN others THEN
          error_message := SQLERRM;
          user_id := user_rec.id;
          email := user_rec.email;
          status := 'error: ' || error_message;
          RETURN NEXT;
      END;
    END LOOP;
    
    RETURN;
  END;
  $$;


--
-- Name: create_user_profile_in_accounts(uuid, text, text, text, text, text, text, text, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.create_user_profile_in_accounts(user_id_param uuid, email_param text, full_name_param text DEFAULT 'User'::text, role_param text DEFAULT 'user'::text, status_param text DEFAULT 'active'::text, prc_number_param text DEFAULT NULL::text, phone_param text DEFAULT NULL::text, bio_param text DEFAULT NULL::text, broker_id_param uuid DEFAULT NULL::uuid) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
  DECLARE
    profile_data jsonb;
    schema_exists boolean;
  BEGIN
    -- Check if accounts schema exists
    SELECT EXISTS (
      SELECT FROM information_schema.schemata 
      WHERE schema_name = 'accounts'
    ) INTO schema_exists;
    
    IF schema_exists THEN
      -- Insert into accounts.user_profiles
      INSERT INTO accounts.user_profiles (
        user_id, 
        full_name, 
        role, 
        status, 
        prc_number, 
        phone, 
        bio, 
        broker_id
      ) VALUES (
        user_id_param, 
        full_name_param, 
        role_param, 
        status_param, 
        prc_number_param, 
        phone_param, 
        bio_param, 
        broker_id_param
      )
      RETURNING to_jsonb(accounts.user_profiles.*) INTO profile_data;
    ELSE
      -- Fall back to public.user_profiles
      INSERT INTO public.user_profiles (
        user_id, 
        full_name, 
        role, 
        status, 
        prc_number, 
        phone, 
        bio, 
        broker_id
      ) VALUES (
        user_id_param, 
        full_name_param, 
        role_param, 
        status_param, 
        prc_number_param, 
        phone_param, 
        bio_param, 
        broker_id_param
      )
      RETURNING to_jsonb(public.user_profiles.*) INTO profile_data;
    END IF;
    
    RETURN profile_data;
  EXCEPTION
    WHEN others THEN
      RAISE EXCEPTION 'Error creating user profile: %', SQLERRM;
  END;
  $$;


--
-- Name: deactivate_pseudonym(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.deactivate_pseudonym(p_conversation_id uuid) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_is_manager BOOLEAN;
  v_pseudonym_active BOOLEAN;
  v_listing_is_private BOOLEAN;
BEGIN
  -- Check if the conversation exists, user is the manager, and it's a private listing
  SELECT 
    (v_user_id = manager_id),
    pseudonym_active,
    listing_is_private
  INTO 
    v_is_manager,
    v_pseudonym_active,
    v_listing_is_private
  FROM public.conversations
  WHERE id = p_conversation_id;

  -- Only managers can deactivate pseudonyms, and only on private listings
  IF NOT v_is_manager THEN
    RAISE EXCEPTION 'Only the property manager can reveal identities';
  END IF;

  IF NOT v_listing_is_private THEN
    RAISE EXCEPTION 'Identity reveal is only needed for private listings';
  END IF;

  IF NOT v_pseudonym_active THEN
    RAISE EXCEPTION 'Identities are already revealed';
  END IF;

  -- Deactivate pseudonyms
  UPDATE public.conversations
  SET pseudonym_active = FALSE
  WHERE id = p_conversation_id;

  -- Insert a system message about identity reveal
  INSERT INTO public.messages (
    conversation_id,
    content,
    is_system_message,
    is_unread
  ) VALUES (
    p_conversation_id,
    'The property manager has revealed identities. You can now see each other''s real names.',
    TRUE,
    TRUE
  );

  RETURN TRUE;
END;
$$;


--
-- Name: get_active_listing(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_active_listing(listing_id_param uuid) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
  listing_data jsonb;
  media_data jsonb;
  amenities_data jsonb;
  broker_data jsonb;
  creator_data jsonb;
BEGIN
  -- Get the listing information from the active_listings view
  SELECT
    jsonb_build_object(
      'id', l.id,
      'title', l.title,
      'description', l.description,
      'price', l.price,
      'currency', l.currency,
      'bedrooms', l.bedrooms,
      'bathrooms', l.bathrooms,
      'floor_area', l.floor_area,
      'lot_area', l.lot_area,
      'year_built', l.year_built,
      'address', l.address,
      'city', l.city,
      'province', l.province,
      'location', CASE
                    WHEN l.location IS NOT NULL THEN
                      jsonb_build_object(
                        'latitude', ST_Y(l.location::geometry),
                        'longitude', ST_X(l.location::geometry)
                      )
                    ELSE NULL
                  END,
      'property_type', l.property_type,
      'condition', l.condition,
      'created_at', l.created_at,
      'updated_at', l.updated_at,
      'approved_at', l.approved_at,
      'primary_image_url', l.primary_image_url,
      'broker_name', l.broker_name
    )
  INTO listing_data
  FROM public.active_listings l
  WHERE l.id = listing_id_param;

  -- If listing not found, return null
  IF listing_data IS NULL THEN
    RETURN NULL;
  END IF;

  -- Get the media information
  SELECT
    jsonb_agg(
      jsonb_build_object(
        'id', pm.id,
        'url', pm.url,
        'media_type', pm.media_type,
        'is_primary', pm.is_primary,
        'created_at', pm.created_at
      )
    )
  INTO media_data
  FROM properties.property_media pm
  WHERE pm.listing_id = listing_id_param;

  -- Get the amenities information
  SELECT
    jsonb_agg(
      jsonb_build_object(
        'id', a.id,
        'name', a.name,
        'description', a.description
      )
    )
  INTO amenities_data
  FROM properties.listing_amenities la
  JOIN properties.amenities a ON la.amenity_id = a.id
  WHERE la.listing_id = listing_id_param;

  -- Get the broker information
  SELECT
    jsonb_build_object(
      'id', up.id,
      'user_id', up.user_id,
      'full_name', up.full_name,
      'email', up.email,
      'phone', up.phone,
      'prc_number', up.prc_number,
      'bio', up.bio
    )
  INTO broker_data
  FROM accounts.user_profiles up
  JOIN public.active_listings l ON up.user_id = l.broker_id
  WHERE l.id = listing_id_param;

  -- Combine all the data
  listing_data := listing_data ||
                 jsonb_build_object(
                   'media', COALESCE(media_data, '[]'::jsonb),
                   'amenities', COALESCE(amenities_data, '[]'::jsonb),
                   'broker', broker_data
                 );

  RETURN listing_data;
END;
$$;


--
-- Name: FUNCTION get_active_listing(listing_id_param uuid); Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON FUNCTION public.get_active_listing(listing_id_param uuid) IS 'Returns complete information about a single active listing (approved and public) by ID, including media, amenities, and broker details.';


--
-- Name: get_broker_verification_status(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_broker_verification_status(user_id_param uuid) RETURNS jsonb
    LANGUAGE plpgsql
    AS $$
DECLARE
  verification_data JSONB;
  profile_data RECORD;
  license_data RECORD;
BEGIN
  -- First check if the user is a broker using the public.user_profiles view
  SELECT role, prc_number INTO profile_data
  FROM public.user_profiles
  WHERE user_id = user_id_param;
  
  -- If not a broker or not found, return null
  IF NOT FOUND OR profile_data.role != 'broker' THEN
    RETURN NULL;
  END IF;
  
  -- Get license verification data
  SELECT 
    lv.is_verified, 
    lv.verification_status, 
    lv.extracted_expiry_date,
    lv.extracted_prc_id,
    lv.verification_failure_reason
  INTO license_data
  FROM accounts.license_verification lv
  WHERE lv.user_id = user_id_param;
  
  -- Build the response
  verification_data = jsonb_build_object(
    'is_broker', TRUE,
    'has_prc_number', (profile_data.prc_number IS NOT NULL),
    'prc_number', profile_data.prc_number
  );
  
  -- If license verification record exists
  IF FOUND THEN
    verification_data = verification_data || jsonb_build_object(
      'is_verified', license_data.is_verified,
      'verification_status', license_data.verification_status,
      'expiry_date', license_data.extracted_expiry_date,
      'extracted_prc_id', license_data.extracted_prc_id,
      'verification_failure_reason', license_data.verification_failure_reason,
      'is_expired', (
        license_data.extracted_expiry_date IS NOT NULL AND 
        license_data.extracted_expiry_date < CURRENT_DATE
      ),
      'needs_verification', (
        license_data.is_verified IS NOT TRUE OR
        license_data.verification_status != 'verified' OR
        (license_data.extracted_expiry_date IS NOT NULL AND license_data.extracted_expiry_date < CURRENT_DATE)
      )
    );
  ELSE
    -- No license verification record
    verification_data = verification_data || jsonb_build_object(
      'is_verified', FALSE,
      'verification_status', NULL,
      'expiry_date', NULL,
      'extracted_prc_id', NULL,
      'verification_failure_reason', NULL,
      'is_expired', FALSE,
      'needs_verification', TRUE
    );
  END IF;
  
  RETURN verification_data;
END;
$$;


--
-- Name: FUNCTION get_broker_verification_status(user_id_param uuid); Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON FUNCTION public.get_broker_verification_status(user_id_param uuid) IS 'Returns the verification status of a broker using public.user_profiles view, including whether they need to verify their license';


--
-- Name: get_cron_secret(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_cron_secret() RETURNS text
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
BEGIN
  RETURN 'local-development-cron-secret';
END;
$$;


--
-- Name: get_edge_function_url(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_edge_function_url() RETURNS text
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
BEGIN
  RETURN 'http://localhost:54321/functions/v1';
END;
$$;


--
-- Name: get_listing(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_listing(listing_id_param uuid) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
  listing_data jsonb;
  media_data jsonb;
  amenities_data jsonb;
  broker_data jsonb;
  creator_data jsonb;
BEGIN
  -- Get the listing information
  SELECT
    jsonb_build_object(
      'id', l.id,
      'title', l.title,
      'description', l.description,
      'price', l.price,
      'currency', l.currency,
      'bedrooms', l.bedrooms,
      'bathrooms', l.bathrooms,
      'floor_area', l.floor_area,
      'lot_area', l.lot_area,
      'year_built', l.year_built,
      'status', l.status,
      'visibility', l.visibility,
      'address', l.address,
      'city', l.city,
      'province', l.province,
      'location', CASE
                    WHEN l.location IS NOT NULL THEN
                      jsonb_build_object(
                        'latitude', ST_Y(l.location::geometry),
                        'longitude', ST_X(l.location::geometry)
                      )
                    ELSE NULL
                  END,
      'property_type', pt.name,
      'condition', c.name,
      'created_at', l.created_at,
      'updated_at', l.updated_at,
      'approved_at', l.approved_at
    )
  INTO listing_data
  FROM properties.listings l
  LEFT JOIN properties.property_types pt ON l.property_type_id = pt.id
  LEFT JOIN properties.conditions c ON l.condition_id = c.id
  WHERE l.id = listing_id_param;

  -- If listing not found, return null
  IF listing_data IS NULL THEN
    RETURN NULL;
  END IF;

  -- Get the media information
  SELECT
    jsonb_agg(
      jsonb_build_object(
        'id', pm.id,
        'url', pm.url,
        'media_type', pm.media_type,
        'is_primary', pm.is_primary,
        'created_at', pm.created_at
      )
    )
  INTO media_data
  FROM properties.property_media pm
  WHERE pm.listing_id = listing_id_param;

  -- Get the amenities information
  SELECT
    jsonb_agg(
      jsonb_build_object(
        'id', a.id,
        'name', a.name,
        'description', a.description
      )
    )
  INTO amenities_data
  FROM properties.listing_amenities la
  JOIN properties.amenities a ON la.amenity_id = a.id
  WHERE la.listing_id = listing_id_param;

  -- Get the broker information
  SELECT
    jsonb_build_object(
      'id', up.id,
      'user_id', up.user_id,
      'full_name', up.full_name,
      'email', up.email,
      'phone', up.phone,
      'prc_number', up.prc_number,
      'bio', up.bio
    )
  INTO broker_data
  FROM accounts.user_profiles up
  JOIN properties.listings l ON up.user_id = l.broker_id
  WHERE l.id = listing_id_param;

  -- Get the creator information
  SELECT
    jsonb_build_object(
      'id', up.id,
      'user_id', up.user_id,
      'full_name', up.full_name,
      'email', up.email,
      'phone', up.phone,
      'role', up.role
    )
  INTO creator_data
  FROM accounts.user_profiles up
  JOIN properties.listings l ON up.user_id = l.creator_id
  WHERE l.id = listing_id_param;

  -- Combine all the data
  listing_data := listing_data ||
                 jsonb_build_object(
                   'media', COALESCE(media_data, '[]'::jsonb),
                   'amenities', COALESCE(amenities_data, '[]'::jsonb),
                   'broker', broker_data,
                   'creator', creator_data
                 );

  RETURN listing_data;
END;
$$;


--
-- Name: FUNCTION get_listing(listing_id_param uuid); Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON FUNCTION public.get_listing(listing_id_param uuid) IS 'Returns complete information about a single listing by ID, including media, amenities, broker, and creator details.';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: listings; Type: TABLE; Schema: properties; Owner: -
--

CREATE TABLE properties.listings (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title text NOT NULL,
    description text,
    price numeric NOT NULL,
    currency text DEFAULT 'PHP'::text,
    bedrooms smallint,
    bathrooms smallint,
    floor_area numeric,
    lot_area numeric,
    year_built smallint,
    status text DEFAULT 'draft'::text,
    visibility text DEFAULT 'private'::text,
    address text,
    city text,
    province text,
    location public.geography(Point,4326),
    property_type_id uuid,
    condition_id uuid,
    broker_id uuid,
    creator_id uuid,
    manager_id uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    approved_at timestamp with time zone,
    approved_by uuid,
    rejected_at timestamp with time zone,
    rejected_by uuid,
    fts tsvector
);


--
-- Name: get_listings_needing_search_update(integer); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_listings_needing_search_update(p_batch_size integer DEFAULT 50) RETURNS SETOF properties.listings
    LANGUAGE sql STABLE
    AS $$
    SELECT l.*
    FROM properties.listings l
    LEFT JOIN public.listing_embeddings le ON l.id = le.listing_id
    WHERE
        le.listing_id IS NULL -- Listings not yet embedded
        OR l.updated_at > le.last_embedded_at -- Listings updated since last embedding
    ORDER BY l.updated_at ASC -- Process oldest updates first
    LIMIT p_batch_size;
$$;


--
-- Name: user_profiles; Type: TABLE; Schema: accounts; Owner: -
--

CREATE TABLE accounts.user_profiles (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    email text,
    full_name text,
    role text,
    status text DEFAULT 'active'::text,
    prc_number text,
    broker_id uuid,
    phone text,
    bio text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: get_salespersons_for_broker(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_salespersons_for_broker(broker_id_param uuid) RETURNS SETOF accounts.user_profiles
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
  BEGIN
    RETURN QUERY
    SELECT *
    FROM accounts.user_profiles
    WHERE broker_id = broker_id_param
    AND role = 'salesperson'
    AND status = 'active';
  END;
  $$;


--
-- Name: get_service_role_key(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_service_role_key() RETURNS text
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
BEGIN
  RETURN 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU';
END;
$$;


--
-- Name: get_user_profile_from_accounts(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_user_profile_from_accounts(user_id_param uuid) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
  DECLARE
    profile_data jsonb;
    schema_exists boolean;
  BEGIN
    -- Check if accounts schema exists
    SELECT EXISTS (
      SELECT FROM information_schema.schemata 
      WHERE schema_name = 'accounts'
    ) INTO schema_exists;
    
    IF schema_exists THEN
      -- Try to get from accounts.user_profiles
      SELECT to_jsonb(up.*)
      FROM accounts.user_profiles up
      WHERE up.user_id = user_id_param
      INTO profile_data;
      
      IF profile_data IS NOT NULL THEN
        RETURN profile_data;
      END IF;
    END IF;
    
    -- Fall back to public.user_profiles
    SELECT to_jsonb(up.*)
    FROM public.user_profiles up
    WHERE up.user_id = user_id_param
    INTO profile_data;
    
    RETURN profile_data;
  END;
  $$;


--
-- Name: handle_system_message_updates(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.handle_system_message_updates() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  v_search_term TEXT;
  v_manager_has_responded BOOLEAN;
  v_existing_content TEXT;
  v_updated_content TEXT;
  v_new_listing_links TEXT := '';
  v_listing_ids UUID[];
  v_listing_titles TEXT[];
  v_system_message_id UUID;
  v_conversation_id UUID;
BEGIN
  -- Only process system messages
  IF NEW.is_system_message = TRUE THEN
    -- Extract the search term from the message content
    v_search_term := substring(NEW.content FROM 'Buyer''s search: "([^"]*)"');
    
    IF v_search_term IS NOT NULL THEN
      -- Check if manager has already responded in this conversation
      SELECT manager_has_responded INTO v_manager_has_responded
      FROM public.conversations
      WHERE id = NEW.conversation_id;
      
      -- Only proceed if manager hasn't responded yet
      IF NOT v_manager_has_responded THEN
        -- Find existing system messages for the same buyer-manager pair and search criteria
        FOR v_existing_content, v_system_message_id, v_conversation_id IN
          SELECT m.content, m.id, m.conversation_id
          FROM public.messages m
          JOIN public.conversations c ON c.id = m.conversation_id
          WHERE m.is_system_message = TRUE
          AND m.id != NEW.id -- Don't update the message we're currently inserting
          AND m.content LIKE '%Buyer''s search: "' || v_search_term || '"%'
          AND c.buyer_id = (SELECT buyer_id FROM public.conversations WHERE id = NEW.conversation_id)
          AND c.manager_id = (SELECT manager_id FROM public.conversations WHERE id = NEW.conversation_id)
          AND c.manager_has_responded = FALSE -- Only update if manager hasn't responded
        LOOP
          -- Extract listing IDs and titles from the new message
          SELECT
            array_agg(DISTINCT substring(link FROM '/my-listings/view/([0-9a-f-]+)')::UUID),
            array_agg(DISTINCT substring(link FROM '- ([^:]+):'))
          INTO v_listing_ids, v_listing_titles
          FROM regexp_matches(NEW.content, '- ([^:]+): /my-listings/view/([0-9a-f-]+)', 'g') AS link;
          
          -- Create links for the new listings
          FOR i IN 1..array_length(v_listing_ids, 1) LOOP
            -- Only add if this listing isn't already in the existing message
            IF v_existing_content NOT LIKE '%/my-listings/view/' || v_listing_ids[i] || '%' THEN
              v_new_listing_links := v_new_listing_links || E'\n- **NEW MATCH:** ' || v_listing_titles[i] || ': /my-listings/view/' || v_listing_ids[i];
            END IF;
          END LOOP;
          
          -- If we have new listings to add
          IF length(v_new_listing_links) > 0 THEN
            -- Check if the message already has an UPDATE section
            IF v_existing_content LIKE '%**UPDATE:**%' THEN
              -- Add to existing UPDATE section
              v_updated_content := v_existing_content || v_new_listing_links;
            ELSE
              -- Create new UPDATE section
              v_updated_content := v_existing_content || E'\n\n**UPDATE:** New properties matching this search have been found:' || v_new_listing_links;
            END IF;
            
            -- Update the existing message
            UPDATE public.messages
            SET
              content = v_updated_content,
              is_unread = TRUE -- Mark as unread even if it was read before
            WHERE id = v_system_message_id;
            
            -- Update the conversation's last_message_at
            UPDATE public.conversations
            SET last_message_at = NOW()
            WHERE id = v_conversation_id;
          END IF;
        END LOOP;
      END IF;
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$;


--
-- Name: hybrid_search_listings(text, public.vector, double precision, integer, numeric, numeric, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.hybrid_search_listings(search_term text, embedding public.vector DEFAULT NULL::public.vector, similarity_threshold double precision DEFAULT 0.5, match_count integer DEFAULT 10, min_price numeric DEFAULT NULL::numeric, max_price numeric DEFAULT NULL::numeric, property_type_id_param uuid DEFAULT NULL::uuid) RETURNS TABLE(id uuid, title text, description text, price numeric, currency text, bedrooms smallint, bathrooms smallint, floor_area numeric, lot_area numeric, year_built smallint, status text, visibility text, address text, city text, province text, location public.geography, property_type_id uuid, condition_id uuid, broker_id uuid, creator_id uuid, manager_id uuid, created_at timestamp with time zone, updated_at timestamp with time zone, approved_at timestamp with time zone, approved_by uuid, rejected_at timestamp with time zone, rejected_by uuid, similarity double precision)
    LANGUAGE plpgsql STABLE SECURITY DEFINER
    SET search_path TO 'public', 'properties'
    AS $$
BEGIN
    RETURN QUERY
    WITH fts_matches AS (
        -- Get matches from full-text search if search_term is provided
        SELECT 
            l.id,
            CASE 
                WHEN search_term IS NOT NULL AND search_term != '' 
                THEN ts_rank(l.fts, websearch_to_tsquery('english', search_term))
                ELSE 0
            END AS fts_rank
        FROM properties.listings l
        WHERE 
            l.status = 'approved'
            AND l.visibility = 'public'
            AND (
                search_term IS NULL 
                OR search_term = '' 
                OR l.fts @@ websearch_to_tsquery('english', search_term)
            )
            AND (min_price IS NULL OR l.price >= min_price)
            AND (max_price IS NULL OR l.price <= max_price)
            AND (property_type_id_param IS NULL OR l.property_type_id = property_type_id_param)
    ),
    vector_matches AS (
        -- Get matches from vector similarity if embedding is provided
        SELECT 
            l.id,
            CASE
                WHEN embedding IS NOT NULL 
                THEN 1 - (le.embedding <=> embedding) -- Convert distance to similarity score
                ELSE 0
            END AS similarity
        FROM properties.listings l
        JOIN public.listing_embeddings le ON l.id = le.listing_id
        WHERE 
            l.status = 'approved'
            AND l.visibility = 'public'
            AND (
                embedding IS NULL 
                OR 1 - (le.embedding <=> embedding) >= similarity_threshold
            )
            AND (min_price IS NULL OR l.price >= min_price)
            AND (max_price IS NULL OR l.price <= max_price)
            AND (property_type_id_param IS NULL OR l.property_type_id = property_type_id_param)
    ),
    combined_scores AS (
        -- Combine scores from both approaches
        SELECT 
            COALESCE(f.id, v.id) AS id,
            COALESCE(f.fts_rank, 0) AS fts_rank,
            COALESCE(v.similarity, 0) AS similarity,
            -- Combined score: normalize and weight both scores
            -- Adjust weights as needed (currently 0.5 each)
            CASE 
                WHEN search_term IS NOT NULL AND search_term != '' AND embedding IS NOT NULL 
                THEN (COALESCE(f.fts_rank, 0) * 0.5) + (COALESCE(v.similarity, 0) * 0.5)
                WHEN search_term IS NOT NULL AND search_term != '' 
                THEN COALESCE(f.fts_rank, 0)
                WHEN embedding IS NOT NULL 
                THEN COALESCE(v.similarity, 0)
                ELSE 0
            END AS combined_score
        FROM fts_matches f
        FULL OUTER JOIN vector_matches v ON f.id = v.id
    )
    SELECT 
        l.*,
        c.similarity
    FROM combined_scores c
    JOIN properties.listings l ON c.id = l.id
    ORDER BY 
        c.combined_score DESC,
        l.created_at DESC
    LIMIT match_count;
END;
$$;


--
-- Name: initiate_conversation(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.initiate_conversation(p_listing_id uuid) RETURNS uuid
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    v_conversation_id UUID;
    v_manager_id UUID;
    v_visibility TEXT;
    v_listing_is_private BOOLEAN;
    v_buyer_pseudonym TEXT;
    v_manager_pseudonym TEXT;
    v_existing_conversation_id UUID;
BEGIN
    -- Check if the user is authenticated
    IF auth.uid() IS NULL THEN
        RAISE EXCEPTION 'Authentication required';
    END IF;
    
    -- Check if the listing exists and get manager ID and visibility
    SELECT manager_id, visibility INTO v_manager_id, v_visibility
    FROM properties.listings
    WHERE id = p_listing_id;
    
    IF v_manager_id IS NULL THEN
        RAISE EXCEPTION 'Listing not found or has no manager assigned';
    END IF;
    
    -- Determine if listing is private based on visibility field
    v_listing_is_private := (v_visibility = 'private');
    
    -- Check if the user is the manager (can't inquire about own listing)
    IF auth.uid() = v_manager_id THEN
        RAISE EXCEPTION 'Cannot inquire about your own listing';
    END IF;
    
    -- Check if a conversation already exists for this listing and buyer
    SELECT id INTO v_existing_conversation_id
    FROM public.conversations
    WHERE listing_id = p_listing_id AND buyer_id = auth.uid();
    
    IF v_existing_conversation_id IS NOT NULL THEN
        RETURN v_existing_conversation_id;
    END IF;
    
    -- Generate pseudonyms
    SELECT name INTO v_buyer_pseudonym
    FROM public.pseudonyms
    WHERE type = 'buyer'
    ORDER BY random()
    LIMIT 1;
    
    IF v_listing_is_private THEN
        SELECT name INTO v_manager_pseudonym
        FROM public.pseudonyms
        WHERE type = 'manager'
        ORDER BY random()
        LIMIT 1;
    END IF;
    
    -- Create the conversation
    INSERT INTO public.conversations (
        listing_id,
        buyer_id,
        manager_id,
        listing_is_private,
        pseudonym_active,
        buyer_pseudonym,
        manager_pseudonym
    ) VALUES (
        p_listing_id,
        auth.uid(),
        v_manager_id,
        v_listing_is_private,
        TRUE, -- Start with pseudonyms active
        v_buyer_pseudonym,
        v_manager_pseudonym
    )
    RETURNING id INTO v_conversation_id;
    
    -- Insert initial message
    INSERT INTO public.messages (
        conversation_id,
        sender_id,
        content,
        is_unread
    ) VALUES (
        v_conversation_id,
        auth.uid(),
        'I am interested in learning more about this listing.',
        TRUE
    );
    
    RETURN v_conversation_id;
END;
$$;


--
-- Name: mark_messages_as_read(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.mark_messages_as_read(p_conversation_id uuid) RETURNS jsonb
    LANGUAGE plpgsql
    AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_count INT := 0;
  v_conversation_exists BOOLEAN;
BEGIN
  -- Check if the conversation exists and the user is a participant
  SELECT EXISTS(
    SELECT 1 FROM public.conversations c
    WHERE c.id = p_conversation_id
    AND (c.buyer_id = v_user_id OR c.manager_id = v_user_id)
  ) INTO v_conversation_exists;

  IF NOT v_conversation_exists THEN
    RETURN jsonb_build_object('error', 'Conversation not found or you are not a participant');
  END IF;

  -- Mark messages as read (only those not sent by the current user)
  -- Use a separate query to count the affected rows
  WITH updated_messages AS (
    UPDATE public.messages
    SET is_unread = FALSE
    WHERE conversation_id = p_conversation_id
    AND is_unread = TRUE
    AND (sender_id IS NULL OR sender_id != v_user_id)
    RETURNING id
  )
  SELECT COUNT(*) INTO v_count FROM updated_messages;

  RETURN jsonb_build_object('messages_read', v_count);
END;
$$;


--
-- Name: notify_manager_on_new_match(uuid, uuid, uuid, uuid, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.notify_manager_on_new_match(p_manager_id uuid, p_buyer_id uuid, p_listing_id uuid, p_search_id uuid, p_listing_title text) RETURNS boolean
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
    v_conversation_id UUID;
    v_message_id UUID;
    v_system_message TEXT;
BEGIN
    -- Check if a conversation already exists between these users
    SELECT id INTO v_conversation_id
    FROM conversations
    WHERE 
        manager_id = p_manager_id 
        AND buyer_id = p_buyer_id
        AND listing_id = p_listing_id;
    
    -- If no conversation exists, create one
    IF v_conversation_id IS NULL THEN
        INSERT INTO conversations (
            manager_id,
            buyer_id,
            listing_id,
            status
        ) VALUES (
            p_manager_id,
            p_buyer_id,
            p_listing_id,
            'active'
        )
        RETURNING id INTO v_conversation_id;
    END IF;
    
    -- Create system message about the match
    v_system_message := 'A buyer''s custom search matched your listing "' || p_listing_title || '". The buyer is interested in properties like yours.';
    
    -- Add the system message to the conversation
    INSERT INTO messages (
        conversation_id,
        sender_id,
        content,
        is_system_message,
        is_unread
    ) VALUES (
        v_conversation_id,
        NULL, -- NULL sender for system messages
        v_system_message,
        TRUE,
        TRUE
    )
    RETURNING id INTO v_message_id;
    
    -- Update the saved search to record that a broker was notified
    UPDATE accounts.saved_searches
    SET last_manager_response_at = NOW()
    WHERE id = p_search_id;
    
    RETURN TRUE;
EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Error notifying manager: %', SQLERRM;
        RETURN FALSE;
END;
$$;


--
-- Name: notify_manager_on_new_matches(uuid, uuid[]); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.notify_manager_on_new_matches(p_search_id uuid, p_listing_ids uuid[]) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
  v_search RECORD;
  v_listing RECORD;
  v_conversation_id UUID;
  v_message_id UUID;
  v_managers_notified INT := 0;
  v_conversations_updated INT := 0;
  v_listing_id UUID;
BEGIN
  -- Get the search details
  SELECT * INTO v_search
  FROM accounts.saved_searches
  WHERE id = p_search_id;

  IF v_search IS NULL THEN
    RETURN jsonb_build_object('error', 'Search not found');
  END IF;

  -- Process each matching listing
  FOREACH v_listing_id IN ARRAY p_listing_ids
  LOOP
    -- Get the listing details
    SELECT id, title, manager_id INTO v_listing
    FROM properties.listings
    WHERE id = v_listing_id;

    IF v_listing IS NULL OR v_listing.manager_id IS NULL THEN
      CONTINUE; -- Skip this listing if not found or no manager
    END IF;

    -- Check if a conversation already exists for this buyer, manager, and search
    SELECT id INTO v_conversation_id
    FROM public.conversations
    WHERE buyer_id = v_search.buyer_id
    AND manager_id = v_listing.manager_id
    AND is_custom_search = TRUE
    AND search_id = v_search.id;

    IF v_conversation_id IS NULL THEN
      -- Create a new conversation
      INSERT INTO public.conversations (
        buyer_id,
        manager_id,
        is_custom_search,
        search_id,
        status,
        manager_has_responded,
        last_message_at
      ) VALUES (
        v_search.buyer_id,
        v_listing.manager_id,
        TRUE,
        v_search.id,
        'active',
        FALSE,
        NOW()
      ) RETURNING id INTO v_conversation_id;

      -- Create the system message
      INSERT INTO public.messages (
        conversation_id,
        content,
        is_system_message,
        is_unread
      ) VALUES (
        v_conversation_id,
        'A buyer is looking for properties matching these criteria:' || E'\n\n' ||
        'Buyer''s search: "' || v_search.search_term || '"' || E'\n\n' ||
        v_search.generated_statement || E'\n\n' ||
        'The following listing matches this search:' || E'\n' ||
        '- ' || v_listing.title || ': /my-listings/view/' || v_listing.id,
        TRUE,
        TRUE
      );

      v_managers_notified := v_managers_notified + 1;
    ELSE
      -- Check if the manager has already responded
      DECLARE
        v_manager_responded BOOLEAN;
      BEGIN
        SELECT manager_has_responded INTO v_manager_responded
        FROM public.conversations
        WHERE id = v_conversation_id;

        IF NOT v_manager_responded THEN
          -- Get the latest system message
          SELECT id INTO v_message_id
          FROM public.messages
          WHERE conversation_id = v_conversation_id
          AND is_system_message = TRUE
          ORDER BY created_at DESC
          LIMIT 1;

          IF v_message_id IS NOT NULL THEN
            -- The trigger will handle updating the message content
            INSERT INTO public.messages (
              conversation_id,
              content,
              is_system_message,
              is_unread
            ) VALUES (
              v_conversation_id,
              'A buyer is looking for properties matching these criteria:' || E'\n\n' ||
              'Buyer''s search: "' || v_search.search_term || '"' || E'\n\n' ||
              v_search.generated_statement || E'\n\n' ||
              'The following listing matches this search:' || E'\n' ||
              '- ' || v_listing.title || ': /my-listings/view/' || v_listing.id,
              TRUE,
              TRUE
            );

            v_conversations_updated := v_conversations_updated + 1;
          END IF;
        END IF;
      END;
    END IF;
  END LOOP;

  RETURN jsonb_build_object(
    'managers_notified', v_managers_notified,
    'conversations_updated', v_conversations_updated
  );
END;
$$;


--
-- Name: save_custom_search(uuid, text, numeric, numeric, uuid, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.save_custom_search(p_buyer_id uuid, p_search_term text, p_min_price numeric DEFAULT NULL::numeric, p_max_price numeric DEFAULT NULL::numeric, p_property_type_id uuid DEFAULT NULL::uuid, p_generated_statement text DEFAULT NULL::text) RETURNS uuid
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public', 'accounts'
    AS $$
DECLARE
    v_search_id UUID;
    v_edge_function_url TEXT;
    v_service_role_key TEXT;
    v_embedding VECTOR(384);
    v_response JSONB;
BEGIN
    -- Get the edge function URL and credentials from functions
    v_edge_function_url := public.get_edge_function_url();
    v_service_role_key := public.get_service_role_key();
    
    -- Generate embedding for the search query using the edge function
    IF p_search_term IS NOT NULL AND p_search_term != '' THEN
        SELECT
            content::jsonb INTO v_response
        FROM
            net.http_post(
                url := v_edge_function_url || '/get-query-embedding',
                headers := jsonb_build_object(
                    'Content-Type', 'application/json',
                    'Authorization', 'Bearer ' || v_service_role_key
                ),
                body := jsonb_build_object('queryText', p_search_term)
            );
            
        -- Extract the embedding from the response
        v_embedding := (v_response->>'embedding')::VECTOR(384);
    END IF;
    
    -- Insert the search with the embedding
    INSERT INTO accounts.saved_searches (
        buyer_id,
        search_term,
        min_price,
        max_price,
        generated_statement,
        query_embedding,
        polling_enabled
    ) VALUES (
        p_buyer_id,
        p_search_term,
        p_min_price,
        p_max_price,
        p_generated_statement,
        v_embedding,
        TRUE
    )
    RETURNING id INTO v_search_id;
    
    RETURN v_search_id;
EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Error saving custom search: %', SQLERRM;
END;
$$;


--
-- Name: search_active_listings(text, numeric, numeric, text, integer, integer, integer, integer, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.search_active_listings(location_param text DEFAULT NULL::text, min_price_param numeric DEFAULT NULL::numeric, max_price_param numeric DEFAULT NULL::numeric, property_type_param text DEFAULT NULL::text, bedrooms_param integer DEFAULT NULL::integer, bathrooms_param integer DEFAULT NULL::integer, page_param integer DEFAULT 1, page_size_param integer DEFAULT 9, sort_param text DEFAULT 'created_at_desc'::text) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
  listings_data jsonb;
  total_count integer;
  offset_value integer;
  sort_field text;
  sort_direction text;
  sort_sql text;
BEGIN
  -- Calculate the offset based on page number and page size
  offset_value := (page_param - 1) * page_size_param;
  
  -- Parse the sort parameter
  IF sort_param IS NOT NULL THEN
    -- Split the sort parameter into field and direction
    -- Expected format: field_direction (e.g., price_asc, created_at_desc)
    sort_field := split_part(sort_param, '_', 1);
    sort_direction := split_part(sort_param, '_', 2);
    
    -- Default to created_at if field is invalid
    IF sort_field NOT IN ('price', 'created_at', 'bedrooms', 'bathrooms', 'floor_area', 'location') THEN
      sort_field := 'created_at';
    END IF;
    
    -- Default to desc if direction is invalid
    IF sort_direction NOT IN ('asc', 'desc') THEN
      sort_direction := 'desc';
    END IF;
    
    -- Build the ORDER BY clause
    CASE sort_field
      WHEN 'price' THEN
        sort_sql := 'l.price ' || sort_direction;
      WHEN 'created_at' THEN
        sort_sql := 'l.created_at ' || sort_direction;
      WHEN 'bedrooms' THEN
        sort_sql := 'l.bedrooms ' || sort_direction;
      WHEN 'bathrooms' THEN
        sort_sql := 'l.bathrooms ' || sort_direction;
      WHEN 'floor_area' THEN
        sort_sql := 'l.floor_area ' || sort_direction;
      WHEN 'location' THEN
        sort_sql := 'l.city ' || sort_direction || ', l.province ' || sort_direction;
      ELSE
        sort_sql := 'l.created_at DESC';
    END CASE;
  ELSE
    -- Default sort order
    sort_sql := 'l.created_at DESC';
  END IF;
  
  -- Get the total count of active listings that match the search criteria
  WITH filtered_listings AS (
    SELECT 
      l.id
    FROM public.active_listings l
    LEFT JOIN properties.property_types pt ON l.property_type_id = pt.id
    WHERE 
      -- Filter by location if provided
      (
        location_param IS NULL 
        OR l.city ILIKE '%' || location_param || '%' 
        OR l.province ILIKE '%' || location_param || '%'
        OR l.address ILIKE '%' || location_param || '%'
      )
      -- Filter by price range if provided
      AND (min_price_param IS NULL OR l.price >= min_price_param)
      AND (max_price_param IS NULL OR l.price <= max_price_param)
      -- Filter by property type if provided
      AND (property_type_param IS NULL OR pt.name ILIKE '%' || property_type_param || '%')
      -- Filter by bedrooms if provided
      AND (bedrooms_param IS NULL OR l.bedrooms = bedrooms_param)
      -- Filter by bathrooms if provided
      AND (bathrooms_param IS NULL OR l.bathrooms = bathrooms_param)
  )
  SELECT COUNT(*) INTO total_count FROM filtered_listings;
  
  -- Get the active listings that match the search criteria with pagination and sorting
  -- We need to use dynamic SQL for the ORDER BY clause
  listings_data := (
    WITH filtered_listings AS (
      SELECT 
        l.id,
        l.title,
        l.description,
        l.price,
        l.currency,
        l.bedrooms,
        l.bathrooms,
        l.floor_area,
        l.lot_area,
        l.year_built,
        l.address,
        l.city,
        l.province,
        CASE 
          WHEN l.location IS NOT NULL THEN 
            jsonb_build_object(
              'latitude', ST_Y(l.location::geometry),
              'longitude', ST_X(l.location::geometry)
            )
          ELSE NULL
        END AS location,
        pt.name AS property_type,
        c.name AS condition,
        l.created_at,
        l.updated_at,
        l.approved_at,
        -- Get the primary image URL if available
        (
          SELECT pm.url
          FROM properties.property_media pm
          WHERE pm.listing_id = l.id AND pm.is_primary = true
          LIMIT 1
        ) AS primary_image_url,
        -- Get the broker name
        (
          SELECT up.full_name
          FROM accounts.user_profiles up
          WHERE up.user_id = l.broker_id
        ) AS broker_name,
        -- Get the broker ID
        l.broker_id
      FROM public.active_listings l
      LEFT JOIN properties.property_types pt ON l.property_type_id = pt.id
      LEFT JOIN properties.conditions c ON l.condition_id = c.id
      WHERE 
        -- Filter by location if provided
        (
          location_param IS NULL 
          OR l.city ILIKE '%' || location_param || '%' 
          OR l.province ILIKE '%' || location_param || '%'
          OR l.address ILIKE '%' || location_param || '%'
        )
        -- Filter by price range if provided
        AND (min_price_param IS NULL OR l.price >= min_price_param)
        AND (max_price_param IS NULL OR l.price <= max_price_param)
        -- Filter by property type if provided
        AND (property_type_param IS NULL OR pt.name ILIKE '%' || property_type_param || '%')
        -- Filter by bedrooms if provided
        AND (bedrooms_param IS NULL OR l.bedrooms = bedrooms_param)
        -- Filter by bathrooms if provided
        AND (bathrooms_param IS NULL OR l.bathrooms = bathrooms_param)
      ORDER BY 
        CASE WHEN sort_field = 'price' AND sort_direction = 'asc' THEN l.price END ASC,
        CASE WHEN sort_field = 'price' AND sort_direction = 'desc' THEN l.price END DESC,
        CASE WHEN sort_field = 'created_at' AND sort_direction = 'asc' THEN l.created_at END ASC,
        CASE WHEN sort_field = 'created_at' AND sort_direction = 'desc' THEN l.created_at END DESC,
        CASE WHEN sort_field = 'bedrooms' AND sort_direction = 'asc' THEN l.bedrooms END ASC,
        CASE WHEN sort_field = 'bedrooms' AND sort_direction = 'desc' THEN l.bedrooms END DESC,
        CASE WHEN sort_field = 'bathrooms' AND sort_direction = 'asc' THEN l.bathrooms END ASC,
        CASE WHEN sort_field = 'bathrooms' AND sort_direction = 'desc' THEN l.bathrooms END DESC,
        CASE WHEN sort_field = 'floor_area' AND sort_direction = 'asc' THEN l.floor_area END ASC,
        CASE WHEN sort_field = 'floor_area' AND sort_direction = 'desc' THEN l.floor_area END DESC,
        CASE WHEN sort_field = 'location' AND sort_direction = 'asc' THEN l.city END ASC,
        CASE WHEN sort_field = 'location' AND sort_direction = 'desc' THEN l.city END DESC,
        -- Default sort if none of the above match
        CASE WHEN sort_field NOT IN ('price', 'created_at', 'bedrooms', 'bathrooms', 'floor_area', 'location') THEN l.created_at END DESC
      LIMIT page_size_param
      OFFSET offset_value
    )
    SELECT 
      jsonb_build_object(
        'listings', jsonb_agg(
          jsonb_build_object(
            'id', fl.id,
            'title', fl.title,
            'description', fl.description,
            'price', fl.price,
            'currency', fl.currency,
            'bedrooms', fl.bedrooms,
            'bathrooms', fl.bathrooms,
            'floor_area', fl.floor_area,
            'lot_area', fl.lot_area,
            'address', fl.address,
            'city', fl.city,
            'province', fl.province,
            'location', fl.location,
            'property_type', fl.property_type,
            'condition', fl.condition,
            'primary_image_url', fl.primary_image_url,
            'broker_name', fl.broker_name,
            'created_at', fl.created_at,
            'updated_at', fl.updated_at
          )
        ),
        'total', total_count,
        'page', page_param,
        'page_size', page_size_param,
        'total_pages', CEIL(total_count::numeric / page_size_param),
        'sort', sort_param
      )
    FROM filtered_listings fl
  );
  
  -- Return empty array if no results
  IF listings_data IS NULL THEN
    RETURN jsonb_build_object(
      'listings', '[]'::jsonb,
      'total', 0,
      'page', page_param,
      'page_size', page_size_param,
      'total_pages', 0,
      'sort', sort_param
    );
  END IF;
  
  RETURN listings_data;
END;
$$;


--
-- Name: FUNCTION search_active_listings(location_param text, min_price_param numeric, max_price_param numeric, property_type_param text, bedrooms_param integer, bathrooms_param integer, page_param integer, page_size_param integer, sort_param text); Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON FUNCTION public.search_active_listings(location_param text, min_price_param numeric, max_price_param numeric, property_type_param text, bedrooms_param integer, bathrooms_param integer, page_param integer, page_size_param integer, sort_param text) IS 'Searches for active listings (approved and public) based on location, price range, property type, bedrooms, and bathrooms. Supports pagination with page and page_size parameters and sorting with sort_param. Returns listings with their details, total count, pagination information, and sort parameter.';


--
-- Name: search_listings(text, numeric, numeric, integer, integer); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.search_listings(search_term text, min_price numeric DEFAULT NULL::numeric, max_price numeric DEFAULT NULL::numeric, page_limit integer DEFAULT 20, page_offset integer DEFAULT 0) RETURNS SETOF properties.listings
    LANGUAGE sql STABLE
    AS $$
  SELECT *
  FROM properties.listings
  WHERE
    status = 'approved'
    AND visibility = 'public'
    AND (
      search_term IS NULL
      OR search_term = ''
      OR fts @@ websearch_to_tsquery('english', search_term)
    )
    AND (min_price IS NULL OR price >= min_price)
    AND (max_price IS NULL OR price <= max_price)
  ORDER BY
    CASE
      WHEN search_term IS NOT NULL AND search_term != ''
      THEN ts_rank(fts, websearch_to_tsquery('english', search_term))
      ELSE 0
    END DESC,
    created_at DESC
  LIMIT page_limit
  OFFSET page_offset;
  $$;


--
-- Name: search_user_listings(uuid, text, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.search_user_listings(user_id_param uuid, role_param text, broker_id_param uuid DEFAULT NULL::uuid) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
  listings_data jsonb;
  total_count integer;
BEGIN
  -- Get the listings that match the search criteria based on user role
  WITH filtered_listings AS (
    SELECT 
      l.id,
      l.title,
      l.description,
      l.price,
      l.currency,
      l.bedrooms,
      l.bathrooms,
      l.floor_area,
      l.lot_area,
      l.year_built,
      l.status,
      l.visibility,
      l.address,
      l.city,
      l.province,
      CASE 
        WHEN l.location IS NOT NULL THEN 
          jsonb_build_object(
            'latitude', ST_Y(l.location::geometry),
            'longitude', ST_X(l.location::geometry)
          )
        ELSE NULL
      END AS location,
      pt.name AS property_type,
      c.name AS condition,
      l.created_at,
      l.updated_at,
      l.approved_at,
      -- Get the primary image URL if available
      (
        SELECT pm.url
        FROM properties.property_media pm
        WHERE pm.listing_id = l.id AND pm.is_primary = true
        LIMIT 1
      ) AS primary_image_url,
      -- Get the broker name
      (
        SELECT up.full_name
        FROM accounts.user_profiles up
        WHERE up.user_id = l.broker_id
      ) AS broker_name,
      -- Get the creator name
      (
        SELECT up.full_name
        FROM accounts.user_profiles up
        WHERE up.user_id = l.creator_id
      ) AS creator_name
    FROM properties.listings l
    LEFT JOIN properties.property_types pt ON l.property_type_id = pt.id
    LEFT JOIN properties.conditions c ON l.condition_id = c.id
    WHERE 
      -- Filter based on user role
      CASE
        -- Broker sees all their listings
        WHEN role_param = 'broker' THEN
          l.broker_id = user_id_param
        -- Salesperson sees listings they created or are assigned to manage
        WHEN role_param = 'salesperson' AND broker_id_param IS NOT NULL THEN
          (l.creator_id = user_id_param OR l.manager_id = user_id_param) AND l.broker_id = broker_id_param
        -- Default case (should not happen)
        ELSE
          FALSE
      END
    ORDER BY l.updated_at DESC
  )
  
  -- Build the response JSON
  SELECT 
    jsonb_build_object(
      'listings', jsonb_agg(
        jsonb_build_object(
          'id', fl.id,
          'title', fl.title,
          'description', fl.description,
          'price', fl.price,
          'currency', fl.currency,
          'bedrooms', fl.bedrooms,
          'bathrooms', fl.bathrooms,
          'floor_area', fl.floor_area,
          'lot_area', fl.lot_area,
          'address', fl.address,
          'city', fl.city,
          'province', fl.province,
          'location', fl.location,
          'property_type', fl.property_type,
          'condition', fl.condition,
          'status', fl.status,
          'visibility', fl.visibility,
          'primary_image_url', fl.primary_image_url,
          'broker_name', fl.broker_name,
          'creator_name', fl.creator_name,
          'created_at', fl.created_at,
          'updated_at', fl.updated_at,
          'approved_at', fl.approved_at
        )
      ),
      'total', count(*)
    ) INTO listings_data
  FROM filtered_listings fl;
  
  -- Return empty array if no results
  IF listings_data IS NULL THEN
    RETURN jsonb_build_object(
      'listings', '[]'::jsonb,
      'total', 0
    );
  END IF;
  
  RETURN listings_data;
END;
$$;


--
-- Name: send_message(uuid, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.send_message(p_conversation_id uuid, p_content text) RETURNS uuid
    LANGUAGE plpgsql
    AS $$
DECLARE
  v_message_id UUID;
  v_user_id UUID := auth.uid();
  v_conversation_exists BOOLEAN;
  v_is_manager BOOLEAN;
  v_pseudonym_active BOOLEAN;
  v_is_first_manager_response BOOLEAN;
BEGIN
  -- Check if the conversation exists and the user is a participant
  SELECT 
    EXISTS(
      SELECT 1 FROM public.conversations c
      WHERE c.id = p_conversation_id
      AND (c.buyer_id = v_user_id OR c.manager_id = v_user_id)
      AND c.status = 'active'
    ),
    (v_user_id = manager_id),
    pseudonym_active,
    (v_user_id = manager_id AND NOT manager_has_responded)
  INTO 
    v_conversation_exists,
    v_is_manager,
    v_pseudonym_active,
    v_is_first_manager_response
  FROM public.conversations
  WHERE id = p_conversation_id;

  IF NOT v_conversation_exists THEN
    RAISE EXCEPTION 'Conversation not found, not active, or you are not a participant';
  END IF;

  -- Insert the message
  INSERT INTO public.messages (
    conversation_id,
    sender_id,
    content,
    is_unread
  ) VALUES (
    p_conversation_id,
    v_user_id,
    p_content,
    TRUE
  )
  RETURNING id INTO v_message_id;

  -- Update the conversation's last_message_at timestamp
  UPDATE public.conversations
  SET 
    last_message_at = now(),
    -- If this is the manager's first response on a public listing, deactivate pseudonyms
    pseudonym_active = CASE 
      WHEN v_is_first_manager_response AND NOT listing_is_private THEN FALSE
      ELSE pseudonym_active
    END,
    -- Mark that the manager has responded
    manager_has_responded = CASE
      WHEN v_is_manager THEN TRUE
      ELSE manager_has_responded
    END
  WHERE id = p_conversation_id;

  RETURN v_message_id;
END;
$$;


--
-- Name: sync_user_email(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.sync_user_email() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  -- Update the email in user_profiles when it changes in auth.users
  UPDATE public.user_profiles
  SET email = NEW.email
  WHERE user_id = NEW.id;
  
  RETURN NEW;
END;
$$;


--
-- Name: trigger_search_data_update(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.trigger_search_data_update() RETURNS text
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
  v_edge_function_url TEXT;
  v_service_role_key TEXT;
  v_cron_secret TEXT;
  v_response JSONB;
BEGIN
  -- Get the edge function URL and credentials from secure settings
  -- In production, these should be stored securely
  v_edge_function_url := current_setting('app.edge_function_url', true);
  v_service_role_key := current_setting('app.service_role_key', true);
  v_cron_secret := current_setting('app.cron_secret', true);
  
  -- Call the edge function using pg_net
  SELECT
    content::jsonb INTO v_response
  FROM
    net.http_post(
      url := v_edge_function_url || '/batch-update-search-data',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || v_service_role_key,
        'X-Cron-Secret', v_cron_secret
      ),
      body := '{}'::jsonb
    );
  
  RETURN 'Search data update triggered successfully';
EXCEPTION
  WHEN OTHERS THEN
    RETURN 'Error triggering search data update: ' || SQLERRM;
END;
$$;


--
-- Name: update_listing(uuid, jsonb); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_listing(listing_id uuid, listing_data jsonb) RETURNS SETOF properties.listings
    LANGUAGE plpgsql
    AS $$
  DECLARE
    updated_listing properties.listings;
    amenity_id UUID;
  BEGIN
    -- Update the listing
    UPDATE properties.listings
    SET
      title = COALESCE(listing_data->>'title', title),
      description = COALESCE(listing_data->>'description', description),
      price = COALESCE((listing_data->>'price')::numeric, price),
      bedrooms = COALESCE((listing_data->>'bedrooms')::smallint, bedrooms),
      bathrooms = COALESCE((listing_data->>'bathrooms')::smallint, bathrooms),
      status = COALESCE(listing_data->>'status', status),
      visibility = COALESCE(listing_data->>'visibility', visibility),
      address = COALESCE(listing_data->>'address', address),
      city = COALESCE(listing_data->>'city', city),
      province = COALESCE(listing_data->>'province', province),
      location = CASE
                  WHEN listing_data->>'location' IS NOT NULL THEN
                    (listing_data->>'location')::geography
                  ELSE location
                END,
      currency = COALESCE(listing_data->>'currency', currency),
      floor_area = COALESCE((listing_data->>'floor_area')::numeric, floor_area),
      lot_area = COALESCE((listing_data->>'lot_area')::numeric, lot_area),
      year_built = COALESCE((listing_data->>'year_built')::smallint, year_built),
      property_type_id = COALESCE((listing_data->>'property_type_id')::uuid, property_type_id),
      condition_id = COALESCE((listing_data->>'condition_id')::uuid, condition_id),
      manager_id = COALESCE((listing_data->>'manager_id')::uuid, manager_id),
      updated_at = NOW()
    WHERE id = listing_id
    RETURNING * INTO updated_listing;

    -- Handle amenities if they are provided
    IF listing_data ? 'amenities' AND jsonb_typeof(listing_data->'amenities') = 'array' THEN
      -- Delete existing amenities for this listing
      DELETE FROM properties.listing_amenities
      WHERE listing_id = updated_listing.id;

      -- Insert new amenities
      FOR amenity_id IN SELECT jsonb_array_elements_text(listing_data->'amenities')::uuid
      LOOP
        INSERT INTO properties.listing_amenities (listing_id, amenity_id)
        VALUES (updated_listing.id, amenity_id);
      END LOOP;
    END IF;

    -- Return the updated listing
    RETURN QUERY SELECT * FROM properties.listings WHERE id = updated_listing.id;
  END;
  $$;


--
-- Name: update_listing_fts_document(uuid, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_listing_fts_document(p_listing_id uuid, p_search_text text) RETURNS void
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public', 'properties'
    AS $$
BEGIN
    UPDATE properties.listings
    SET 
        fts_document = to_tsvector('english', p_search_text),
        updated_at = CURRENT_TIMESTAMP
    WHERE 
        id = p_listing_id;
END;
$$;


--
-- Name: update_saved_search_response_timestamp(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_saved_search_response_timestamp() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public', 'accounts'
    AS $$
DECLARE
    v_search_id UUID;
    v_conversation RECORD;
BEGIN
    -- Get the conversation details
    SELECT c.* INTO v_conversation
    FROM public.conversations c
    WHERE c.id = NEW.conversation_id;
    
    -- If this is a custom search conversation, update the timestamp
    IF v_conversation.is_custom_search AND v_conversation.search_id IS NOT NULL AND NEW.sender_id = v_conversation.manager_id THEN
        UPDATE accounts.saved_searches
        SET last_manager_response_at = NOW()
        WHERE id = v_conversation.search_id;
    END IF;
    
    RETURN NEW;
END;
$$;


--
-- Name: update_saved_searches(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_saved_searches() RETURNS integer
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public', 'accounts'
    AS $$
DECLARE
    v_count INTEGER := 0;
    v_search RECORD;
    v_matches RECORD;
    v_notification_sent BOOLEAN;
BEGIN
    -- Loop through active saved searches that haven't been checked recently
    FOR v_search IN 
        SELECT 
            s.id, 
            s.buyer_id, 
            s.search_term, 
            s.min_price, 
            s.max_price, 
            s.query_embedding
        FROM accounts.saved_searches s
        WHERE 
            s.polling_enabled = TRUE
            AND (
                s.last_polling_at IS NULL 
                OR s.last_polling_at < NOW() - INTERVAL '1 day'
            )
    LOOP
        v_notification_sent := FALSE;
        
        -- Find matching listings using hybrid search
        FOR v_matches IN
            SELECT 
                l.id, 
                l.title, 
                l.broker_id
            FROM public.hybrid_search_listings(
                v_search.search_term,
                v_search.query_embedding,
                0.6,  -- similarity threshold
                10,   -- match count
                v_search.min_price,
                v_search.max_price
            ) l
        LOOP
            -- Check if this is a new match (not previously notified)
            IF NOT EXISTS (
                SELECT 1 
                FROM public.custom_search_matches 
                WHERE search_id = v_search.id AND listing_id = v_matches.id
            ) THEN
                -- Record the match
                INSERT INTO public.custom_search_matches (
                    search_id,
                    listing_id,
                    matched_at
                ) VALUES (
                    v_search.id,
                    v_matches.id,
                    NOW()
                );
                
                -- Notify the broker about the match
                PERFORM public.notify_manager_on_new_match(
                    v_matches.broker_id,
                    v_search.buyer_id,
                    v_matches.id,
                    v_search.id,
                    v_matches.title
                );
                
                v_notification_sent := TRUE;
                v_count := v_count + 1;
            END IF;
        END LOOP;
        
        -- Update the last polling timestamp
        UPDATE accounts.saved_searches
        SET last_polling_at = NOW()
        WHERE id = v_search.id;
    END LOOP;
    
    RETURN v_count;
EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Error updating saved searches: %', SQLERRM;
        RETURN -1;
END;
$$;


--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
  BEGIN
    NEW.updated_at = now();
    RETURN NEW;
  END;
  $$;


--
-- Name: update_user_profile_in_accounts(uuid, text, text, text, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_user_profile_in_accounts(user_id_param uuid, full_name_param text DEFAULT NULL::text, prc_number_param text DEFAULT NULL::text, phone_param text DEFAULT NULL::text, bio_param text DEFAULT NULL::text) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
  DECLARE
    profile_data jsonb;
    schema_exists boolean;
    profile_exists boolean;
  BEGIN
    -- Check if accounts schema exists
    SELECT EXISTS (
      SELECT FROM information_schema.schemata 
      WHERE schema_name = 'accounts'
    ) INTO schema_exists;
    
    IF schema_exists THEN
      -- Check if profile exists in accounts
      SELECT EXISTS (
        SELECT 1 FROM accounts.user_profiles 
        WHERE user_id = user_id_param
      ) INTO profile_exists;
      
      IF profile_exists THEN
        -- Update in accounts.user_profiles
        UPDATE accounts.user_profiles
        SET 
          full_name = COALESCE(full_name_param, full_name),
          prc_number = COALESCE(prc_number_param, prc_number),
          phone = COALESCE(phone_param, phone),
          bio = COALESCE(bio_param, bio),
          updated_at = now()
        WHERE user_id = user_id_param
        RETURNING to_jsonb(accounts.user_profiles.*) INTO profile_data;
        
        RETURN profile_data;
      END IF;
    END IF;
    
    -- Fall back to public.user_profiles
    UPDATE public.user_profiles
    SET 
      full_name = COALESCE(full_name_param, full_name),
      prc_number = COALESCE(prc_number_param, prc_number),
      phone = COALESCE(phone_param, phone),
      bio = COALESCE(bio_param, bio),
      updated_at = now()
    WHERE user_id = user_id_param
    RETURNING to_jsonb(public.user_profiles.*) INTO profile_data;
    
    RETURN profile_data;
  EXCEPTION
    WHEN others THEN
      RAISE EXCEPTION 'Error updating user profile: %', SQLERRM;
  END;
  $$;


--
-- Name: apply_rls(jsonb, integer); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.apply_rls(wal jsonb, max_record_bytes integer DEFAULT (1024 * 1024)) RETURNS SETOF realtime.wal_rls
    LANGUAGE plpgsql
    AS $$
declare
-- Regclass of the table e.g. public.notes
entity_ regclass = (quote_ident(wal ->> 'schema') || '.' || quote_ident(wal ->> 'table'))::regclass;

-- I, U, D, T: insert, update ...
action realtime.action = (
    case wal ->> 'action'
        when 'I' then 'INSERT'
        when 'U' then 'UPDATE'
        when 'D' then 'DELETE'
        else 'ERROR'
    end
);

-- Is row level security enabled for the table
is_rls_enabled bool = relrowsecurity from pg_class where oid = entity_;

subscriptions realtime.subscription[] = array_agg(subs)
    from
        realtime.subscription subs
    where
        subs.entity = entity_;

-- Subscription vars
roles regrole[] = array_agg(distinct us.claims_role::text)
    from
        unnest(subscriptions) us;

working_role regrole;
claimed_role regrole;
claims jsonb;

subscription_id uuid;
subscription_has_access bool;
visible_to_subscription_ids uuid[] = '{}';

-- structured info for wal's columns
columns realtime.wal_column[];
-- previous identity values for update/delete
old_columns realtime.wal_column[];

error_record_exceeds_max_size boolean = octet_length(wal::text) > max_record_bytes;

-- Primary jsonb output for record
output jsonb;

begin
perform set_config('role', null, true);

columns =
    array_agg(
        (
            x->>'name',
            x->>'type',
            x->>'typeoid',
            realtime.cast(
                (x->'value') #>> '{}',
                coalesce(
                    (x->>'typeoid')::regtype, -- null when wal2json version <= 2.4
                    (x->>'type')::regtype
                )
            ),
            (pks ->> 'name') is not null,
            true
        )::realtime.wal_column
    )
    from
        jsonb_array_elements(wal -> 'columns') x
        left join jsonb_array_elements(wal -> 'pk') pks
            on (x ->> 'name') = (pks ->> 'name');

old_columns =
    array_agg(
        (
            x->>'name',
            x->>'type',
            x->>'typeoid',
            realtime.cast(
                (x->'value') #>> '{}',
                coalesce(
                    (x->>'typeoid')::regtype, -- null when wal2json version <= 2.4
                    (x->>'type')::regtype
                )
            ),
            (pks ->> 'name') is not null,
            true
        )::realtime.wal_column
    )
    from
        jsonb_array_elements(wal -> 'identity') x
        left join jsonb_array_elements(wal -> 'pk') pks
            on (x ->> 'name') = (pks ->> 'name');

for working_role in select * from unnest(roles) loop

    -- Update `is_selectable` for columns and old_columns
    columns =
        array_agg(
            (
                c.name,
                c.type_name,
                c.type_oid,
                c.value,
                c.is_pkey,
                pg_catalog.has_column_privilege(working_role, entity_, c.name, 'SELECT')
            )::realtime.wal_column
        )
        from
            unnest(columns) c;

    old_columns =
            array_agg(
                (
                    c.name,
                    c.type_name,
                    c.type_oid,
                    c.value,
                    c.is_pkey,
                    pg_catalog.has_column_privilege(working_role, entity_, c.name, 'SELECT')
                )::realtime.wal_column
            )
            from
                unnest(old_columns) c;

    if action <> 'DELETE' and count(1) = 0 from unnest(columns) c where c.is_pkey then
        return next (
            jsonb_build_object(
                'schema', wal ->> 'schema',
                'table', wal ->> 'table',
                'type', action
            ),
            is_rls_enabled,
            -- subscriptions is already filtered by entity
            (select array_agg(s.subscription_id) from unnest(subscriptions) as s where claims_role = working_role),
            array['Error 400: Bad Request, no primary key']
        )::realtime.wal_rls;

    -- The claims role does not have SELECT permission to the primary key of entity
    elsif action <> 'DELETE' and sum(c.is_selectable::int) <> count(1) from unnest(columns) c where c.is_pkey then
        return next (
            jsonb_build_object(
                'schema', wal ->> 'schema',
                'table', wal ->> 'table',
                'type', action
            ),
            is_rls_enabled,
            (select array_agg(s.subscription_id) from unnest(subscriptions) as s where claims_role = working_role),
            array['Error 401: Unauthorized']
        )::realtime.wal_rls;

    else
        output = jsonb_build_object(
            'schema', wal ->> 'schema',
            'table', wal ->> 'table',
            'type', action,
            'commit_timestamp', to_char(
                ((wal ->> 'timestamp')::timestamptz at time zone 'utc'),
                'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"'
            ),
            'columns', (
                select
                    jsonb_agg(
                        jsonb_build_object(
                            'name', pa.attname,
                            'type', pt.typname
                        )
                        order by pa.attnum asc
                    )
                from
                    pg_attribute pa
                    join pg_type pt
                        on pa.atttypid = pt.oid
                where
                    attrelid = entity_
                    and attnum > 0
                    and pg_catalog.has_column_privilege(working_role, entity_, pa.attname, 'SELECT')
            )
        )
        -- Add "record" key for insert and update
        || case
            when action in ('INSERT', 'UPDATE') then
                jsonb_build_object(
                    'record',
                    (
                        select
                            jsonb_object_agg(
                                -- if unchanged toast, get column name and value from old record
                                coalesce((c).name, (oc).name),
                                case
                                    when (c).name is null then (oc).value
                                    else (c).value
                                end
                            )
                        from
                            unnest(columns) c
                            full outer join unnest(old_columns) oc
                                on (c).name = (oc).name
                        where
                            coalesce((c).is_selectable, (oc).is_selectable)
                            and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))
                    )
                )
            else '{}'::jsonb
        end
        -- Add "old_record" key for update and delete
        || case
            when action = 'UPDATE' then
                jsonb_build_object(
                        'old_record',
                        (
                            select jsonb_object_agg((c).name, (c).value)
                            from unnest(old_columns) c
                            where
                                (c).is_selectable
                                and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))
                        )
                    )
            when action = 'DELETE' then
                jsonb_build_object(
                    'old_record',
                    (
                        select jsonb_object_agg((c).name, (c).value)
                        from unnest(old_columns) c
                        where
                            (c).is_selectable
                            and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))
                            and ( not is_rls_enabled or (c).is_pkey ) -- if RLS enabled, we can't secure deletes so filter to pkey
                    )
                )
            else '{}'::jsonb
        end;

        -- Create the prepared statement
        if is_rls_enabled and action <> 'DELETE' then
            if (select 1 from pg_prepared_statements where name = 'walrus_rls_stmt' limit 1) > 0 then
                deallocate walrus_rls_stmt;
            end if;
            execute realtime.build_prepared_statement_sql('walrus_rls_stmt', entity_, columns);
        end if;

        visible_to_subscription_ids = '{}';

        for subscription_id, claims in (
                select
                    subs.subscription_id,
                    subs.claims
                from
                    unnest(subscriptions) subs
                where
                    subs.entity = entity_
                    and subs.claims_role = working_role
                    and (
                        realtime.is_visible_through_filters(columns, subs.filters)
                        or (
                          action = 'DELETE'
                          and realtime.is_visible_through_filters(old_columns, subs.filters)
                        )
                    )
        ) loop

            if not is_rls_enabled or action = 'DELETE' then
                visible_to_subscription_ids = visible_to_subscription_ids || subscription_id;
            else
                -- Check if RLS allows the role to see the record
                perform
                    -- Trim leading and trailing quotes from working_role because set_config
                    -- doesn't recognize the role as valid if they are included
                    set_config('role', trim(both '"' from working_role::text), true),
                    set_config('request.jwt.claims', claims::text, true);

                execute 'execute walrus_rls_stmt' into subscription_has_access;

                if subscription_has_access then
                    visible_to_subscription_ids = visible_to_subscription_ids || subscription_id;
                end if;
            end if;
        end loop;

        perform set_config('role', null, true);

        return next (
            output,
            is_rls_enabled,
            visible_to_subscription_ids,
            case
                when error_record_exceeds_max_size then array['Error 413: Payload Too Large']
                else '{}'
            end
        )::realtime.wal_rls;

    end if;
end loop;

perform set_config('role', null, true);
end;
$$;


--
-- Name: broadcast_changes(text, text, text, text, text, record, record, text); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.broadcast_changes(topic_name text, event_name text, operation text, table_name text, table_schema text, new record, old record, level text DEFAULT 'ROW'::text) RETURNS void
    LANGUAGE plpgsql
    AS $$
DECLARE
    -- Declare a variable to hold the JSONB representation of the row
    row_data jsonb := '{}'::jsonb;
BEGIN
    IF level = 'STATEMENT' THEN
        RAISE EXCEPTION 'function can only be triggered for each row, not for each statement';
    END IF;
    -- Check the operation type and handle accordingly
    IF operation = 'INSERT' OR operation = 'UPDATE' OR operation = 'DELETE' THEN
        row_data := jsonb_build_object('old_record', OLD, 'record', NEW, 'operation', operation, 'table', table_name, 'schema', table_schema);
        PERFORM realtime.send (row_data, event_name, topic_name);
    ELSE
        RAISE EXCEPTION 'Unexpected operation type: %', operation;
    END IF;
EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Failed to process the row: %', SQLERRM;
END;

$$;


--
-- Name: build_prepared_statement_sql(text, regclass, realtime.wal_column[]); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[]) RETURNS text
    LANGUAGE sql
    AS $$
      /*
      Builds a sql string that, if executed, creates a prepared statement to
      tests retrive a row from *entity* by its primary key columns.
      Example
          select realtime.build_prepared_statement_sql('public.notes', '{"id"}'::text[], '{"bigint"}'::text[])
      */
          select
      'prepare ' || prepared_statement_name || ' as
          select
              exists(
                  select
                      1
                  from
                      ' || entity || '
                  where
                      ' || string_agg(quote_ident(pkc.name) || '=' || quote_nullable(pkc.value #>> '{}') , ' and ') || '
              )'
          from
              unnest(columns) pkc
          where
              pkc.is_pkey
          group by
              entity
      $$;


--
-- Name: cast(text, regtype); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime."cast"(val text, type_ regtype) RETURNS jsonb
    LANGUAGE plpgsql IMMUTABLE
    AS $$
    declare
      res jsonb;
    begin
      execute format('select to_jsonb(%L::'|| type_::text || ')', val)  into res;
      return res;
    end
    $$;


--
-- Name: check_equality_op(realtime.equality_op, regtype, text, text); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text) RETURNS boolean
    LANGUAGE plpgsql IMMUTABLE
    AS $$
      /*
      Casts *val_1* and *val_2* as type *type_* and check the *op* condition for truthiness
      */
      declare
          op_symbol text = (
              case
                  when op = 'eq' then '='
                  when op = 'neq' then '!='
                  when op = 'lt' then '<'
                  when op = 'lte' then '<='
                  when op = 'gt' then '>'
                  when op = 'gte' then '>='
                  when op = 'in' then '= any'
                  else 'UNKNOWN OP'
              end
          );
          res boolean;
      begin
          execute format(
              'select %L::'|| type_::text || ' ' || op_symbol
              || ' ( %L::'
              || (
                  case
                      when op = 'in' then type_::text || '[]'
                      else type_::text end
              )
              || ')', val_1, val_2) into res;
          return res;
      end;
      $$;


--
-- Name: is_visible_through_filters(realtime.wal_column[], realtime.user_defined_filter[]); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[]) RETURNS boolean
    LANGUAGE sql IMMUTABLE
    AS $_$
    /*
    Should the record be visible (true) or filtered out (false) after *filters* are applied
    */
        select
            -- Default to allowed when no filters present
            $2 is null -- no filters. this should not happen because subscriptions has a default
            or array_length($2, 1) is null -- array length of an empty array is null
            or bool_and(
                coalesce(
                    realtime.check_equality_op(
                        op:=f.op,
                        type_:=coalesce(
                            col.type_oid::regtype, -- null when wal2json version <= 2.4
                            col.type_name::regtype
                        ),
                        -- cast jsonb to text
                        val_1:=col.value #>> '{}',
                        val_2:=f.value
                    ),
                    false -- if null, filter does not match
                )
            )
        from
            unnest(filters) f
            join unnest(columns) col
                on f.column_name = col.name;
    $_$;


--
-- Name: list_changes(name, name, integer, integer); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer) RETURNS SETOF realtime.wal_rls
    LANGUAGE sql
    SET log_min_messages TO 'fatal'
    AS $$
      with pub as (
        select
          concat_ws(
            ',',
            case when bool_or(pubinsert) then 'insert' else null end,
            case when bool_or(pubupdate) then 'update' else null end,
            case when bool_or(pubdelete) then 'delete' else null end
          ) as w2j_actions,
          coalesce(
            string_agg(
              realtime.quote_wal2json(format('%I.%I', schemaname, tablename)::regclass),
              ','
            ) filter (where ppt.tablename is not null and ppt.tablename not like '% %'),
            ''
          ) w2j_add_tables
        from
          pg_publication pp
          left join pg_publication_tables ppt
            on pp.pubname = ppt.pubname
        where
          pp.pubname = publication
        group by
          pp.pubname
        limit 1
      ),
      w2j as (
        select
          x.*, pub.w2j_add_tables
        from
          pub,
          pg_logical_slot_get_changes(
            slot_name, null, max_changes,
            'include-pk', 'true',
            'include-transaction', 'false',
            'include-timestamp', 'true',
            'include-type-oids', 'true',
            'format-version', '2',
            'actions', pub.w2j_actions,
            'add-tables', pub.w2j_add_tables
          ) x
      )
      select
        xyz.wal,
        xyz.is_rls_enabled,
        xyz.subscription_ids,
        xyz.errors
      from
        w2j,
        realtime.apply_rls(
          wal := w2j.data::jsonb,
          max_record_bytes := max_record_bytes
        ) xyz(wal, is_rls_enabled, subscription_ids, errors)
      where
        w2j.w2j_add_tables <> ''
        and xyz.subscription_ids[1] is not null
    $$;


--
-- Name: quote_wal2json(regclass); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.quote_wal2json(entity regclass) RETURNS text
    LANGUAGE sql IMMUTABLE STRICT
    AS $$
      select
        (
          select string_agg('' || ch,'')
          from unnest(string_to_array(nsp.nspname::text, null)) with ordinality x(ch, idx)
          where
            not (x.idx = 1 and x.ch = '"')
            and not (
              x.idx = array_length(string_to_array(nsp.nspname::text, null), 1)
              and x.ch = '"'
            )
        )
        || '.'
        || (
          select string_agg('' || ch,'')
          from unnest(string_to_array(pc.relname::text, null)) with ordinality x(ch, idx)
          where
            not (x.idx = 1 and x.ch = '"')
            and not (
              x.idx = array_length(string_to_array(nsp.nspname::text, null), 1)
              and x.ch = '"'
            )
          )
      from
        pg_class pc
        join pg_namespace nsp
          on pc.relnamespace = nsp.oid
      where
        pc.oid = entity
    $$;


--
-- Name: send(jsonb, text, text, boolean); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.send(payload jsonb, event text, topic text, private boolean DEFAULT true) RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  BEGIN
    -- Set the topic configuration
    EXECUTE format('SET LOCAL realtime.topic TO %L', topic);

    -- Attempt to insert the message
    INSERT INTO realtime.messages (payload, event, topic, private, extension)
    VALUES (payload, event, topic, private, 'broadcast');
  EXCEPTION
    WHEN OTHERS THEN
      -- Capture and notify the error
      PERFORM pg_notify(
          'realtime:system',
          jsonb_build_object(
              'error', SQLERRM,
              'function', 'realtime.send',
              'event', event,
              'topic', topic,
              'private', private
          )::text
      );
  END;
END;
$$;


--
-- Name: subscription_check_filters(); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.subscription_check_filters() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    /*
    Validates that the user defined filters for a subscription:
    - refer to valid columns that the claimed role may access
    - values are coercable to the correct column type
    */
    declare
        col_names text[] = coalesce(
                array_agg(c.column_name order by c.ordinal_position),
                '{}'::text[]
            )
            from
                information_schema.columns c
            where
                format('%I.%I', c.table_schema, c.table_name)::regclass = new.entity
                and pg_catalog.has_column_privilege(
                    (new.claims ->> 'role'),
                    format('%I.%I', c.table_schema, c.table_name)::regclass,
                    c.column_name,
                    'SELECT'
                );
        filter realtime.user_defined_filter;
        col_type regtype;

        in_val jsonb;
    begin
        for filter in select * from unnest(new.filters) loop
            -- Filtered column is valid
            if not filter.column_name = any(col_names) then
                raise exception 'invalid column for filter %', filter.column_name;
            end if;

            -- Type is sanitized and safe for string interpolation
            col_type = (
                select atttypid::regtype
                from pg_catalog.pg_attribute
                where attrelid = new.entity
                      and attname = filter.column_name
            );
            if col_type is null then
                raise exception 'failed to lookup type for column %', filter.column_name;
            end if;

            -- Set maximum number of entries for in filter
            if filter.op = 'in'::realtime.equality_op then
                in_val = realtime.cast(filter.value, (col_type::text || '[]')::regtype);
                if coalesce(jsonb_array_length(in_val), 0) > 100 then
                    raise exception 'too many values for `in` filter. Maximum 100';
                end if;
            else
                -- raises an exception if value is not coercable to type
                perform realtime.cast(filter.value, col_type);
            end if;

        end loop;

        -- Apply consistent order to filters so the unique constraint on
        -- (subscription_id, entity, filters) can't be tricked by a different filter order
        new.filters = coalesce(
            array_agg(f order by f.column_name, f.op, f.value),
            '{}'
        ) from unnest(new.filters) f;

        return new;
    end;
    $$;


--
-- Name: to_regrole(text); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.to_regrole(role_name text) RETURNS regrole
    LANGUAGE sql IMMUTABLE
    AS $$ select role_name::regrole $$;


--
-- Name: topic(); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.topic() RETURNS text
    LANGUAGE sql STABLE
    AS $$
select nullif(current_setting('realtime.topic', true), '')::text;
$$;


--
-- Name: add_prefixes(text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.add_prefixes(_bucket_id text, _name text) RETURNS void
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    prefixes text[];
BEGIN
    prefixes := "storage"."get_prefixes"("_name");

    IF array_length(prefixes, 1) > 0 THEN
        INSERT INTO storage.prefixes (name, bucket_id)
        SELECT UNNEST(prefixes) as name, "_bucket_id" ON CONFLICT DO NOTHING;
    END IF;
END;
$$;


--
-- Name: can_insert_object(text, text, uuid, jsonb); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.can_insert_object(bucketid text, name text, owner uuid, metadata jsonb) RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  INSERT INTO "storage"."objects" ("bucket_id", "name", "owner", "metadata") VALUES (bucketid, name, owner, metadata);
  -- hack to rollback the successful insert
  RAISE sqlstate 'PT200' using
  message = 'ROLLBACK',
  detail = 'rollback successful insert';
END
$$;


--
-- Name: delete_prefix(text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.delete_prefix(_bucket_id text, _name text) RETURNS boolean
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
BEGIN
    -- Check if we can delete the prefix
    IF EXISTS(
        SELECT FROM "storage"."prefixes"
        WHERE "prefixes"."bucket_id" = "_bucket_id"
          AND level = "storage"."get_level"("_name") + 1
          AND "prefixes"."name" COLLATE "C" LIKE "_name" || '/%'
        LIMIT 1
    )
    OR EXISTS(
        SELECT FROM "storage"."objects"
        WHERE "objects"."bucket_id" = "_bucket_id"
          AND "storage"."get_level"("objects"."name") = "storage"."get_level"("_name") + 1
          AND "objects"."name" COLLATE "C" LIKE "_name" || '/%'
        LIMIT 1
    ) THEN
    -- There are sub-objects, skip deletion
    RETURN false;
    ELSE
        DELETE FROM "storage"."prefixes"
        WHERE "prefixes"."bucket_id" = "_bucket_id"
          AND level = "storage"."get_level"("_name")
          AND "prefixes"."name" = "_name";
        RETURN true;
    END IF;
END;
$$;


--
-- Name: delete_prefix_hierarchy_trigger(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.delete_prefix_hierarchy_trigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
    prefix text;
BEGIN
    prefix := "storage"."get_prefix"(OLD."name");

    IF coalesce(prefix, '') != '' THEN
        PERFORM "storage"."delete_prefix"(OLD."bucket_id", prefix);
    END IF;

    RETURN OLD;
END;
$$;


--
-- Name: extension(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.extension(name text) RETURNS text
    LANGUAGE plpgsql
    AS $$
DECLARE
_parts text[];
_filename text;
BEGIN
	select string_to_array(name, '/') into _parts;
	select _parts[array_length(_parts,1)] into _filename;
	-- @todo return the last part instead of 2
	return reverse(split_part(reverse(_filename), '.', 1));
END
$$;


--
-- Name: filename(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.filename(name text) RETURNS text
    LANGUAGE plpgsql
    AS $$
DECLARE
_parts text[];
BEGIN
	select string_to_array(name, '/') into _parts;
	return _parts[array_length(_parts,1)];
END
$$;


--
-- Name: foldername(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.foldername(name text) RETURNS text[]
    LANGUAGE plpgsql
    AS $$
DECLARE
_parts text[];
BEGIN
	select string_to_array(name, '/') into _parts;
	return _parts[1:array_length(_parts,1)-1];
END
$$;


--
-- Name: get_level(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.get_level(name text) RETURNS integer
    LANGUAGE sql IMMUTABLE STRICT
    AS $$
SELECT array_length(string_to_array("name", '/'), 1);
$$;


--
-- Name: get_prefix(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.get_prefix(name text) RETURNS text
    LANGUAGE sql IMMUTABLE STRICT
    AS $_$
SELECT
    CASE WHEN strpos("name", '/') > 0 THEN
             regexp_replace("name", '[\/]{1}[^\/]+\/?$', '')
         ELSE
             ''
        END;
$_$;


--
-- Name: get_prefixes(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.get_prefixes(name text) RETURNS text[]
    LANGUAGE plpgsql IMMUTABLE STRICT
    AS $$
DECLARE
    parts text[];
    prefixes text[];
    prefix text;
BEGIN
    -- Split the name into parts by '/'
    parts := string_to_array("name", '/');
    prefixes := '{}';

    -- Construct the prefixes, stopping one level below the last part
    FOR i IN 1..array_length(parts, 1) - 1 LOOP
            prefix := array_to_string(parts[1:i], '/');
            prefixes := array_append(prefixes, prefix);
    END LOOP;

    RETURN prefixes;
END;
$$;


--
-- Name: get_size_by_bucket(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.get_size_by_bucket() RETURNS TABLE(size bigint, bucket_id text)
    LANGUAGE plpgsql
    AS $$
BEGIN
    return query
        select sum((metadata->>'size')::int) as size, obj.bucket_id
        from "storage".objects as obj
        group by obj.bucket_id;
END
$$;


--
-- Name: list_multipart_uploads_with_delimiter(text, text, text, integer, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.list_multipart_uploads_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer DEFAULT 100, next_key_token text DEFAULT ''::text, next_upload_token text DEFAULT ''::text) RETURNS TABLE(key text, id text, created_at timestamp with time zone)
    LANGUAGE plpgsql
    AS $_$
BEGIN
    RETURN QUERY EXECUTE
        'SELECT DISTINCT ON(key COLLATE "C") * from (
            SELECT
                CASE
                    WHEN position($2 IN substring(key from length($1) + 1)) > 0 THEN
                        substring(key from 1 for length($1) + position($2 IN substring(key from length($1) + 1)))
                    ELSE
                        key
                END AS key, id, created_at
            FROM
                storage.s3_multipart_uploads
            WHERE
                bucket_id = $5 AND
                key ILIKE $1 || ''%'' AND
                CASE
                    WHEN $4 != '''' AND $6 = '''' THEN
                        CASE
                            WHEN position($2 IN substring(key from length($1) + 1)) > 0 THEN
                                substring(key from 1 for length($1) + position($2 IN substring(key from length($1) + 1))) COLLATE "C" > $4
                            ELSE
                                key COLLATE "C" > $4
                            END
                    ELSE
                        true
                END AND
                CASE
                    WHEN $6 != '''' THEN
                        id COLLATE "C" > $6
                    ELSE
                        true
                    END
            ORDER BY
                key COLLATE "C" ASC, created_at ASC) as e order by key COLLATE "C" LIMIT $3'
        USING prefix_param, delimiter_param, max_keys, next_key_token, bucket_id, next_upload_token;
END;
$_$;


--
-- Name: list_objects_with_delimiter(text, text, text, integer, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.list_objects_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer DEFAULT 100, start_after text DEFAULT ''::text, next_token text DEFAULT ''::text) RETURNS TABLE(name text, id uuid, metadata jsonb, updated_at timestamp with time zone)
    LANGUAGE plpgsql
    AS $_$
BEGIN
    RETURN QUERY EXECUTE
        'SELECT DISTINCT ON(name COLLATE "C") * from (
            SELECT
                CASE
                    WHEN position($2 IN substring(name from length($1) + 1)) > 0 THEN
                        substring(name from 1 for length($1) + position($2 IN substring(name from length($1) + 1)))
                    ELSE
                        name
                END AS name, id, metadata, updated_at
            FROM
                storage.objects
            WHERE
                bucket_id = $5 AND
                name ILIKE $1 || ''%'' AND
                CASE
                    WHEN $6 != '''' THEN
                    name COLLATE "C" > $6
                ELSE true END
                AND CASE
                    WHEN $4 != '''' THEN
                        CASE
                            WHEN position($2 IN substring(name from length($1) + 1)) > 0 THEN
                                substring(name from 1 for length($1) + position($2 IN substring(name from length($1) + 1))) COLLATE "C" > $4
                            ELSE
                                name COLLATE "C" > $4
                            END
                    ELSE
                        true
                END
            ORDER BY
                name COLLATE "C" ASC) as e order by name COLLATE "C" LIMIT $3'
        USING prefix_param, delimiter_param, max_keys, next_token, bucket_id, start_after;
END;
$_$;


--
-- Name: objects_insert_prefix_trigger(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.objects_insert_prefix_trigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    PERFORM "storage"."add_prefixes"(NEW."bucket_id", NEW."name");
    NEW.level := "storage"."get_level"(NEW."name");

    RETURN NEW;
END;
$$;


--
-- Name: operation(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.operation() RETURNS text
    LANGUAGE plpgsql STABLE
    AS $$
BEGIN
    RETURN current_setting('storage.operation', true);
END;
$$;


--
-- Name: prefixes_insert_trigger(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.prefixes_insert_trigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    PERFORM "storage"."add_prefixes"(NEW."bucket_id", NEW."name");
    RETURN NEW;
END;
$$;


--
-- Name: search(text, text, integer, integer, integer, text, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.search(prefix text, bucketname text, limits integer DEFAULT 100, levels integer DEFAULT 1, offsets integer DEFAULT 0, search text DEFAULT ''::text, sortcolumn text DEFAULT 'name'::text, sortorder text DEFAULT 'asc'::text) RETURNS TABLE(name text, id uuid, updated_at timestamp with time zone, created_at timestamp with time zone, last_accessed_at timestamp with time zone, metadata jsonb)
    LANGUAGE plpgsql STABLE
    AS $$
declare
    can_bypass_rls BOOLEAN;
begin
    SELECT rolbypassrls
    INTO can_bypass_rls
    FROM pg_roles
    WHERE rolname = coalesce(nullif(current_setting('role', true), 'none'), current_user);

    IF can_bypass_rls THEN
        RETURN QUERY SELECT * FROM storage.search_v1_optimised(prefix, bucketname, limits, levels, offsets, search, sortcolumn, sortorder);
    ELSE
        RETURN QUERY SELECT * FROM storage.search_legacy_v1(prefix, bucketname, limits, levels, offsets, search, sortcolumn, sortorder);
    END IF;
end;
$$;


--
-- Name: search_legacy_v1(text, text, integer, integer, integer, text, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.search_legacy_v1(prefix text, bucketname text, limits integer DEFAULT 100, levels integer DEFAULT 1, offsets integer DEFAULT 0, search text DEFAULT ''::text, sortcolumn text DEFAULT 'name'::text, sortorder text DEFAULT 'asc'::text) RETURNS TABLE(name text, id uuid, updated_at timestamp with time zone, created_at timestamp with time zone, last_accessed_at timestamp with time zone, metadata jsonb)
    LANGUAGE plpgsql STABLE
    AS $_$
declare
    v_order_by text;
    v_sort_order text;
begin
    case
        when sortcolumn = 'name' then
            v_order_by = 'name';
        when sortcolumn = 'updated_at' then
            v_order_by = 'updated_at';
        when sortcolumn = 'created_at' then
            v_order_by = 'created_at';
        when sortcolumn = 'last_accessed_at' then
            v_order_by = 'last_accessed_at';
        else
            v_order_by = 'name';
        end case;

    case
        when sortorder = 'asc' then
            v_sort_order = 'asc';
        when sortorder = 'desc' then
            v_sort_order = 'desc';
        else
            v_sort_order = 'asc';
        end case;

    v_order_by = v_order_by || ' ' || v_sort_order;

    return query execute
        'with folders as (
           select path_tokens[$1] as folder
           from storage.objects
             where objects.name ilike $2 || $3 || ''%''
               and bucket_id = $4
               and array_length(objects.path_tokens, 1) <> $1
           group by folder
           order by folder ' || v_sort_order || '
     )
     (select folder as "name",
            null as id,
            null as updated_at,
            null as created_at,
            null as last_accessed_at,
            null as metadata from folders)
     union all
     (select path_tokens[$1] as "name",
            id,
            updated_at,
            created_at,
            last_accessed_at,
            metadata
     from storage.objects
     where objects.name ilike $2 || $3 || ''%''
       and bucket_id = $4
       and array_length(objects.path_tokens, 1) = $1
     order by ' || v_order_by || ')
     limit $5
     offset $6' using levels, prefix, search, bucketname, limits, offsets;
end;
$_$;


--
-- Name: search_v1_optimised(text, text, integer, integer, integer, text, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.search_v1_optimised(prefix text, bucketname text, limits integer DEFAULT 100, levels integer DEFAULT 1, offsets integer DEFAULT 0, search text DEFAULT ''::text, sortcolumn text DEFAULT 'name'::text, sortorder text DEFAULT 'asc'::text) RETURNS TABLE(name text, id uuid, updated_at timestamp with time zone, created_at timestamp with time zone, last_accessed_at timestamp with time zone, metadata jsonb)
    LANGUAGE plpgsql STABLE
    AS $_$
declare
    v_order_by text;
    v_sort_order text;
begin
    case
        when sortcolumn = 'name' then
            v_order_by = 'name';
        when sortcolumn = 'updated_at' then
            v_order_by = 'updated_at';
        when sortcolumn = 'created_at' then
            v_order_by = 'created_at';
        when sortcolumn = 'last_accessed_at' then
            v_order_by = 'last_accessed_at';
        else
            v_order_by = 'name';
        end case;

    case
        when sortorder = 'asc' then
            v_sort_order = 'asc';
        when sortorder = 'desc' then
            v_sort_order = 'desc';
        else
            v_sort_order = 'asc';
        end case;

    v_order_by = v_order_by || ' ' || v_sort_order;

    return query execute
        'with folders as (
           select (string_to_array(name, ''/''))[level] as name
           from storage.prefixes
             where lower(prefixes.name) like lower($2 || $3) || ''%''
               and bucket_id = $4
               and level = $1
           order by name ' || v_sort_order || '
     )
     (select name,
            null as id,
            null as updated_at,
            null as created_at,
            null as last_accessed_at,
            null as metadata from folders)
     union all
     (select path_tokens[level] as "name",
            id,
            updated_at,
            created_at,
            last_accessed_at,
            metadata
     from storage.objects
     where lower(objects.name) like lower($2 || $3) || ''%''
       and bucket_id = $4
       and level = $1
     order by ' || v_order_by || ')
     limit $5
     offset $6' using levels, prefix, search, bucketname, limits, offsets;
end;
$_$;


--
-- Name: search_v2(text, text, integer, integer, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.search_v2(prefix text, bucket_name text, limits integer DEFAULT 100, levels integer DEFAULT 1, start_after text DEFAULT ''::text) RETURNS TABLE(key text, name text, id uuid, updated_at timestamp with time zone, created_at timestamp with time zone, metadata jsonb)
    LANGUAGE plpgsql STABLE
    AS $_$
BEGIN
    RETURN query EXECUTE
        $sql$
        SELECT * FROM (
            (
                SELECT
                    split_part(name, '/', $4) AS key,
                    name || '/' AS name,
                    NULL::uuid AS id,
                    NULL::timestamptz AS updated_at,
                    NULL::timestamptz AS created_at,
                    NULL::jsonb AS metadata
                FROM storage.prefixes
                WHERE name COLLATE "C" LIKE $1 || '%'
                AND bucket_id = $2
                AND level = $4
                AND name COLLATE "C" > $5
                ORDER BY prefixes.name COLLATE "C" LIMIT $3
            )
            UNION ALL
            (SELECT split_part(name, '/', $4) AS key,
                name,
                id,
                updated_at,
                created_at,
                metadata
            FROM storage.objects
            WHERE name COLLATE "C" LIKE $1 || '%'
                AND bucket_id = $2
                AND level = $4
                AND name COLLATE "C" > $5
            ORDER BY name COLLATE "C" LIMIT $3)
        ) obj
        ORDER BY name COLLATE "C" LIMIT $3;
        $sql$
        USING prefix, bucket_name, limits, levels, start_after;
END;
$_$;


--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW; 
END;
$$;


--
-- Name: http_request(); Type: FUNCTION; Schema: supabase_functions; Owner: -
--

CREATE FUNCTION supabase_functions.http_request() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'supabase_functions'
    AS $$
  DECLARE
    request_id bigint;
    payload jsonb;
    url text := TG_ARGV[0]::text;
    method text := TG_ARGV[1]::text;
    headers jsonb DEFAULT '{}'::jsonb;
    params jsonb DEFAULT '{}'::jsonb;
    timeout_ms integer DEFAULT 1000;
  BEGIN
    IF url IS NULL OR url = 'null' THEN
      RAISE EXCEPTION 'url argument is missing';
    END IF;

    IF method IS NULL OR method = 'null' THEN
      RAISE EXCEPTION 'method argument is missing';
    END IF;

    IF TG_ARGV[2] IS NULL OR TG_ARGV[2] = 'null' THEN
      headers = '{"Content-Type": "application/json"}'::jsonb;
    ELSE
      headers = TG_ARGV[2]::jsonb;
    END IF;

    IF TG_ARGV[3] IS NULL OR TG_ARGV[3] = 'null' THEN
      params = '{}'::jsonb;
    ELSE
      params = TG_ARGV[3]::jsonb;
    END IF;

    IF TG_ARGV[4] IS NULL OR TG_ARGV[4] = 'null' THEN
      timeout_ms = 1000;
    ELSE
      timeout_ms = TG_ARGV[4]::integer;
    END IF;

    CASE
      WHEN method = 'GET' THEN
        SELECT http_get INTO request_id FROM net.http_get(
          url,
          params,
          headers,
          timeout_ms
        );
      WHEN method = 'POST' THEN
        payload = jsonb_build_object(
          'old_record', OLD,
          'record', NEW,
          'type', TG_OP,
          'table', TG_TABLE_NAME,
          'schema', TG_TABLE_SCHEMA
        );

        SELECT http_post INTO request_id FROM net.http_post(
          url,
          payload,
          params,
          headers,
          timeout_ms
        );
      ELSE
        RAISE EXCEPTION 'method argument % is invalid', method;
    END CASE;

    INSERT INTO supabase_functions.hooks
      (hook_table_id, hook_name, request_id)
    VALUES
      (TG_RELID, TG_NAME, request_id);

    RETURN NEW;
  END
$$;


--
-- Name: extensions; Type: TABLE; Schema: _realtime; Owner: -
--

CREATE TABLE _realtime.extensions (
    id uuid NOT NULL,
    type text,
    settings jsonb,
    tenant_external_id text,
    inserted_at timestamp(0) without time zone NOT NULL,
    updated_at timestamp(0) without time zone NOT NULL
);


--
-- Name: schema_migrations; Type: TABLE; Schema: _realtime; Owner: -
--

CREATE TABLE _realtime.schema_migrations (
    version bigint NOT NULL,
    inserted_at timestamp(0) without time zone
);


--
-- Name: tenants; Type: TABLE; Schema: _realtime; Owner: -
--

CREATE TABLE _realtime.tenants (
    id uuid NOT NULL,
    name text,
    external_id text,
    jwt_secret text,
    max_concurrent_users integer DEFAULT 200 NOT NULL,
    inserted_at timestamp(0) without time zone NOT NULL,
    updated_at timestamp(0) without time zone NOT NULL,
    max_events_per_second integer DEFAULT 100 NOT NULL,
    postgres_cdc_default text DEFAULT 'postgres_cdc_rls'::text,
    max_bytes_per_second integer DEFAULT 100000 NOT NULL,
    max_channels_per_client integer DEFAULT 100 NOT NULL,
    max_joins_per_second integer DEFAULT 500 NOT NULL,
    suspend boolean DEFAULT false,
    jwt_jwks jsonb,
    notify_private_alpha boolean DEFAULT false,
    private_only boolean DEFAULT false NOT NULL
);


--
-- Name: license_verification; Type: TABLE; Schema: accounts; Owner: -
--

CREATE TABLE accounts.license_verification (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    ip_address text,
    geo_location jsonb,
    verification_status text DEFAULT 'pending'::text NOT NULL,
    verification_failure_reason text,
    extracted_prc_id text,
    extracted_prc_full_name text,
    extracted_occupation text,
    extracted_expiry_date timestamp with time zone,
    is_verified boolean DEFAULT false,
    last_verification_attempt_date timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: TABLE license_verification; Type: COMMENT; Schema: accounts; Owner: -
--

COMMENT ON TABLE accounts.license_verification IS 'Stores broker license verification information. RLS policies: 
1. SELECT: Users can view their own records; admins and moderators can view all records
2. INSERT: Only brokers and salespersons can insert their own records
3. UPDATE: Only brokers and salespersons can update their own records
4. DELETE: Only admins and moderators can delete records';


--
-- Name: saved_searches; Type: TABLE; Schema: accounts; Owner: -
--

CREATE TABLE accounts.saved_searches (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    buyer_id uuid NOT NULL,
    search_term text,
    min_price numeric,
    max_price numeric,
    generated_statement text,
    polling_enabled boolean DEFAULT true,
    last_polling_at timestamp with time zone,
    last_manager_response_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    query_embedding public.vector(384)
);


--
-- Name: batch_config; Type: TABLE; Schema: admin; Owner: -
--

CREATE TABLE admin.batch_config (
    key text NOT NULL,
    value text NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: audit_log_entries; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.audit_log_entries (
    instance_id uuid,
    id uuid NOT NULL,
    payload json,
    created_at timestamp with time zone,
    ip_address character varying(64) DEFAULT ''::character varying NOT NULL
);


--
-- Name: TABLE audit_log_entries; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.audit_log_entries IS 'Auth: Audit trail for user actions.';


--
-- Name: flow_state; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.flow_state (
    id uuid NOT NULL,
    user_id uuid,
    auth_code text NOT NULL,
    code_challenge_method auth.code_challenge_method NOT NULL,
    code_challenge text NOT NULL,
    provider_type text NOT NULL,
    provider_access_token text,
    provider_refresh_token text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    authentication_method text NOT NULL,
    auth_code_issued_at timestamp with time zone
);


--
-- Name: TABLE flow_state; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.flow_state IS 'stores metadata for pkce logins';


--
-- Name: identities; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.identities (
    provider_id text NOT NULL,
    user_id uuid NOT NULL,
    identity_data jsonb NOT NULL,
    provider text NOT NULL,
    last_sign_in_at timestamp with time zone,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    email text GENERATED ALWAYS AS (lower((identity_data ->> 'email'::text))) STORED,
    id uuid DEFAULT gen_random_uuid() NOT NULL
);


--
-- Name: TABLE identities; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.identities IS 'Auth: Stores identities associated to a user.';


--
-- Name: COLUMN identities.email; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.identities.email IS 'Auth: Email is a generated column that references the optional email property in the identity_data';


--
-- Name: instances; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.instances (
    id uuid NOT NULL,
    uuid uuid,
    raw_base_config text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


--
-- Name: TABLE instances; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.instances IS 'Auth: Manages users across multiple sites.';


--
-- Name: mfa_amr_claims; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.mfa_amr_claims (
    session_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    authentication_method text NOT NULL,
    id uuid NOT NULL
);


--
-- Name: TABLE mfa_amr_claims; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.mfa_amr_claims IS 'auth: stores authenticator method reference claims for multi factor authentication';


--
-- Name: mfa_challenges; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.mfa_challenges (
    id uuid NOT NULL,
    factor_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    verified_at timestamp with time zone,
    ip_address inet NOT NULL,
    otp_code text,
    web_authn_session_data jsonb
);


--
-- Name: TABLE mfa_challenges; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.mfa_challenges IS 'auth: stores metadata about challenge requests made';


--
-- Name: mfa_factors; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.mfa_factors (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    friendly_name text,
    factor_type auth.factor_type NOT NULL,
    status auth.factor_status NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    secret text,
    phone text,
    last_challenged_at timestamp with time zone,
    web_authn_credential jsonb,
    web_authn_aaguid uuid
);


--
-- Name: TABLE mfa_factors; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.mfa_factors IS 'auth: stores metadata about factors';


--
-- Name: one_time_tokens; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.one_time_tokens (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    token_type auth.one_time_token_type NOT NULL,
    token_hash text NOT NULL,
    relates_to text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    CONSTRAINT one_time_tokens_token_hash_check CHECK ((char_length(token_hash) > 0))
);


--
-- Name: refresh_tokens; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.refresh_tokens (
    instance_id uuid,
    id bigint NOT NULL,
    token character varying(255),
    user_id character varying(255),
    revoked boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    parent character varying(255),
    session_id uuid
);


--
-- Name: TABLE refresh_tokens; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.refresh_tokens IS 'Auth: Store of tokens used to refresh JWT tokens once they expire.';


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE; Schema: auth; Owner: -
--

CREATE SEQUENCE auth.refresh_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: -
--

ALTER SEQUENCE auth.refresh_tokens_id_seq OWNED BY auth.refresh_tokens.id;


--
-- Name: saml_providers; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.saml_providers (
    id uuid NOT NULL,
    sso_provider_id uuid NOT NULL,
    entity_id text NOT NULL,
    metadata_xml text NOT NULL,
    metadata_url text,
    attribute_mapping jsonb,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    name_id_format text,
    CONSTRAINT "entity_id not empty" CHECK ((char_length(entity_id) > 0)),
    CONSTRAINT "metadata_url not empty" CHECK (((metadata_url = NULL::text) OR (char_length(metadata_url) > 0))),
    CONSTRAINT "metadata_xml not empty" CHECK ((char_length(metadata_xml) > 0))
);


--
-- Name: TABLE saml_providers; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.saml_providers IS 'Auth: Manages SAML Identity Provider connections.';


--
-- Name: saml_relay_states; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.saml_relay_states (
    id uuid NOT NULL,
    sso_provider_id uuid NOT NULL,
    request_id text NOT NULL,
    for_email text,
    redirect_to text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    flow_state_id uuid,
    CONSTRAINT "request_id not empty" CHECK ((char_length(request_id) > 0))
);


--
-- Name: TABLE saml_relay_states; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.saml_relay_states IS 'Auth: Contains SAML Relay State information for each Service Provider initiated login.';


--
-- Name: schema_migrations; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.schema_migrations (
    version character varying(255) NOT NULL
);


--
-- Name: TABLE schema_migrations; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.schema_migrations IS 'Auth: Manages updates to the auth system.';


--
-- Name: sessions; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.sessions (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    factor_id uuid,
    aal auth.aal_level,
    not_after timestamp with time zone,
    refreshed_at timestamp without time zone,
    user_agent text,
    ip inet,
    tag text
);


--
-- Name: TABLE sessions; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.sessions IS 'Auth: Stores session data associated to a user.';


--
-- Name: COLUMN sessions.not_after; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.sessions.not_after IS 'Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired.';


--
-- Name: sso_domains; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.sso_domains (
    id uuid NOT NULL,
    sso_provider_id uuid NOT NULL,
    domain text NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    CONSTRAINT "domain not empty" CHECK ((char_length(domain) > 0))
);


--
-- Name: TABLE sso_domains; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.sso_domains IS 'Auth: Manages SSO email address domain mapping to an SSO Identity Provider.';


--
-- Name: sso_providers; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.sso_providers (
    id uuid NOT NULL,
    resource_id text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    CONSTRAINT "resource_id not empty" CHECK (((resource_id = NULL::text) OR (char_length(resource_id) > 0)))
);


--
-- Name: TABLE sso_providers; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.sso_providers IS 'Auth: Manages SSO identity provider information; see saml_providers for SAML.';


--
-- Name: COLUMN sso_providers.resource_id; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.sso_providers.resource_id IS 'Auth: Uniquely identifies a SSO provider according to a user-chosen resource ID (case insensitive), useful in infrastructure as code.';


--
-- Name: users; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.users (
    instance_id uuid,
    id uuid NOT NULL,
    aud character varying(255),
    role character varying(255),
    email character varying(255),
    encrypted_password character varying(255),
    email_confirmed_at timestamp with time zone,
    invited_at timestamp with time zone,
    confirmation_token character varying(255),
    confirmation_sent_at timestamp with time zone,
    recovery_token character varying(255),
    recovery_sent_at timestamp with time zone,
    email_change_token_new character varying(255),
    email_change character varying(255),
    email_change_sent_at timestamp with time zone,
    last_sign_in_at timestamp with time zone,
    raw_app_meta_data jsonb,
    raw_user_meta_data jsonb,
    is_super_admin boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    phone text DEFAULT NULL::character varying,
    phone_confirmed_at timestamp with time zone,
    phone_change text DEFAULT ''::character varying,
    phone_change_token character varying(255) DEFAULT ''::character varying,
    phone_change_sent_at timestamp with time zone,
    confirmed_at timestamp with time zone GENERATED ALWAYS AS (LEAST(email_confirmed_at, phone_confirmed_at)) STORED,
    email_change_token_current character varying(255) DEFAULT ''::character varying,
    email_change_confirm_status smallint DEFAULT 0,
    banned_until timestamp with time zone,
    reauthentication_token character varying(255) DEFAULT ''::character varying,
    reauthentication_sent_at timestamp with time zone,
    is_sso_user boolean DEFAULT false NOT NULL,
    deleted_at timestamp with time zone,
    is_anonymous boolean DEFAULT false NOT NULL,
    CONSTRAINT users_email_change_confirm_status_check CHECK (((email_change_confirm_status >= 0) AND (email_change_confirm_status <= 2)))
);


--
-- Name: TABLE users; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.users IS 'Auth: Stores user login data within a secure schema.';


--
-- Name: COLUMN users.is_sso_user; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.users.is_sso_user IS 'Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails.';


--
-- Name: conditions; Type: TABLE; Schema: properties; Owner: -
--

CREATE TABLE properties.conditions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: property_types; Type: TABLE; Schema: properties; Owner: -
--

CREATE TABLE properties.property_types (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: active_listings; Type: VIEW; Schema: properties; Owner: -
--

CREATE VIEW properties.active_listings AS
 SELECT l.id,
    l.title,
    l.description,
    l.price,
    l.currency,
    l.bedrooms,
    l.bathrooms,
    l.floor_area,
    l.lot_area,
    l.year_built,
    l.status,
    l.visibility,
    l.address,
    l.city,
    l.province,
    l.location,
    l.property_type_id,
    l.condition_id,
    l.broker_id,
    l.creator_id,
    l.manager_id,
    l.created_at,
    l.updated_at,
    l.approved_at,
    l.approved_by,
    l.rejected_at,
    l.rejected_by,
    l.fts,
    pt.name AS property_type_name,
    c.name AS condition_name,
    up.full_name AS manager_name,
    u.email AS manager_email
   FROM ((((properties.listings l
     LEFT JOIN properties.property_types pt ON ((l.property_type_id = pt.id)))
     LEFT JOIN properties.conditions c ON ((l.condition_id = c.id)))
     LEFT JOIN accounts.user_profiles up ON ((l.manager_id = up.id)))
     LEFT JOIN auth.users u ON ((up.id = u.id)))
  WHERE ((l.status = 'approved'::text) AND (l.visibility = 'public'::text));


--
-- Name: amenities; Type: TABLE; Schema: properties; Owner: -
--

CREATE TABLE properties.amenities (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: listing_amenities; Type: TABLE; Schema: properties; Owner: -
--

CREATE TABLE properties.listing_amenities (
    listing_id uuid NOT NULL,
    amenity_id uuid NOT NULL
);


--
-- Name: listing_comments; Type: TABLE; Schema: properties; Owner: -
--

CREATE TABLE properties.listing_comments (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    listing_id uuid NOT NULL,
    comment_type text DEFAULT 'moderation'::text,
    comment text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    created_by uuid NOT NULL
);


--
-- Name: property_identifiers; Type: TABLE; Schema: properties; Owner: -
--

CREATE TABLE properties.property_identifiers (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    listing_id uuid NOT NULL,
    identifier_type text NOT NULL,
    identifier_value text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: property_media; Type: TABLE; Schema: properties; Owner: -
--

CREATE TABLE properties.property_media (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    listing_id uuid NOT NULL,
    url text NOT NULL,
    is_primary boolean DEFAULT false,
    media_type text DEFAULT 'image'::text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: public_listings; Type: VIEW; Schema: properties; Owner: -
--

CREATE VIEW properties.public_listings AS
 SELECT l.id,
    l.title,
    l.description,
    l.price,
    l.currency,
    l.bedrooms,
    l.bathrooms,
    l.floor_area,
    l.lot_area,
    l.city,
    l.province,
    l.location,
    l.address,
    l.property_type_id,
    l.condition_id,
    pm.url AS primary_image_url,
    l.created_at
   FROM (properties.listings l
     LEFT JOIN LATERAL ( SELECT property_media.url
           FROM properties.property_media
          WHERE ((property_media.listing_id = l.id) AND (property_media.is_primary = true))
         LIMIT 1) pm ON (true))
  WHERE ((l.status = 'approved'::text) AND (l.visibility = 'public'::text));


--
-- Name: active_listings; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.active_listings AS
 SELECT l.id,
    l.title,
    l.description,
    l.price,
    l.currency,
    l.bedrooms,
    l.bathrooms,
    l.floor_area,
    l.lot_area,
    l.year_built,
    l.status,
    l.visibility,
    l.address,
    l.city,
    l.province,
    l.location,
    l.broker_id,
    l.creator_id,
    l.property_type_id,
    l.condition_id,
    l.created_at,
    l.updated_at,
    l.approved_at,
    l.approved_by,
    pt.name AS property_type,
    c.name AS condition,
    ( SELECT pm.url
           FROM properties.property_media pm
          WHERE ((pm.listing_id = l.id) AND (pm.is_primary = true))
         LIMIT 1) AS primary_image_url,
    ( SELECT up.full_name
           FROM accounts.user_profiles up
          WHERE (up.user_id = l.broker_id)) AS broker_name
   FROM ((properties.listings l
     LEFT JOIN properties.property_types pt ON ((l.property_type_id = pt.id)))
     LEFT JOIN properties.conditions c ON ((l.condition_id = c.id)))
  WHERE ((l.status = 'approved'::text) AND (l.visibility = 'public'::text));


--
-- Name: conversations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.conversations (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    manager_id uuid NOT NULL,
    buyer_id uuid NOT NULL,
    listing_id uuid,
    status text DEFAULT 'active'::text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    listing_is_private boolean DEFAULT false NOT NULL,
    pseudonym_active boolean DEFAULT false NOT NULL,
    buyer_pseudonym text,
    manager_pseudonym text,
    manager_has_responded boolean DEFAULT false NOT NULL,
    buyer_warnings smallint DEFAULT 0 NOT NULL,
    manager_warnings smallint DEFAULT 0 NOT NULL,
    last_message_at timestamp with time zone,
    is_custom_search boolean DEFAULT false NOT NULL,
    search_id uuid,
    CONSTRAINT conversations_buyer_warnings_check CHECK (((buyer_warnings >= 0) AND (buyer_warnings <= 3))),
    CONSTRAINT conversations_manager_warnings_check CHECK (((manager_warnings >= 0) AND (manager_warnings <= 3))),
    CONSTRAINT conversations_status_check CHECK ((status = ANY (ARRAY['active'::text, 'deleted_violation'::text, 'archived'::text])))
);


--
-- Name: custom_search_matches; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.custom_search_matches (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    search_id uuid NOT NULL,
    listing_id uuid NOT NULL,
    matched_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: listing_amenities; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.listing_amenities AS
 SELECT la.listing_id,
    la.amenity_id,
    a.name AS amenity_name,
    a.description AS amenity_description
   FROM (properties.listing_amenities la
     JOIN properties.amenities a ON ((la.amenity_id = a.id)));


--
-- Name: listing_embeddings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.listing_embeddings (
    listing_id uuid NOT NULL,
    embedding public.vector(384),
    last_embedded_at timestamp with time zone DEFAULT now()
);


--
-- Name: messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.messages (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    conversation_id uuid NOT NULL,
    sender_id uuid,
    content text NOT NULL,
    is_system_message boolean DEFAULT false,
    is_unread boolean DEFAULT true,
    is_archived boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: pseudonyms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.pseudonyms (
    id integer NOT NULL,
    name text NOT NULL,
    type text NOT NULL,
    CONSTRAINT pseudonyms_type_check CHECK ((type = ANY (ARRAY['buyer'::text, 'manager'::text])))
);


--
-- Name: pseudonyms_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.pseudonyms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pseudonyms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.pseudonyms_id_seq OWNED BY public.pseudonyms.id;


--
-- Name: push_subscriptions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.push_subscriptions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    endpoint text NOT NULL,
    p256dh text NOT NULL,
    auth text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: user_profiles; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.user_profiles AS
 SELECT up.id,
    up.user_id,
    up.email,
    up.full_name,
    up.role,
    up.status,
    up.prc_number,
    up.broker_id,
    up.phone,
    up.bio,
    up.created_at,
    up.updated_at,
    ( SELECT up2.full_name
           FROM accounts.user_profiles up2
          WHERE (up2.user_id = up.broker_id)) AS broker_name
   FROM accounts.user_profiles up;


--
-- Name: v_buyer_pseudonyms; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.v_buyer_pseudonyms AS
 SELECT pseudonyms.id,
    pseudonyms.name
   FROM public.pseudonyms
  WHERE (pseudonyms.type = 'buyer'::text);


--
-- Name: v_conversations_list; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.v_conversations_list AS
 SELECT c.id,
    c.listing_id,
    c.buyer_id,
    c.manager_id,
        CASE
            WHEN c.pseudonym_active THEN c.buyer_pseudonym
            ELSE buyer_profile.full_name
        END AS buyer_display_name,
        CASE
            WHEN (c.pseudonym_active AND c.listing_is_private) THEN c.manager_pseudonym
            WHEN (c.pseudonym_active AND (NOT c.listing_is_private)) THEN manager_profile.full_name
            ELSE manager_profile.full_name
        END AS manager_display_name,
    lm.content AS last_message_snippet,
    c.last_message_at,
    lm.sender_id AS last_sender_id,
    lm.is_system_message,
    c.pseudonym_active,
    c.listing_is_private,
    c.status,
    l.title AS listing_title,
    ( SELECT count(*) AS count
           FROM public.messages m
          WHERE ((m.conversation_id = c.id) AND (m.is_unread = true) AND ((m.sender_id IS NULL) OR (m.sender_id <> auth.uid())))) AS unread_count,
    c.is_custom_search,
    c.search_id
   FROM ((((public.conversations c
     LEFT JOIN LATERAL ( SELECT msg.content,
            msg.sender_id,
            msg.is_system_message
           FROM public.messages msg
          WHERE ((msg.conversation_id = c.id) AND ((msg.is_archived = false) OR (msg.is_archived IS NULL)))
          ORDER BY msg.created_at DESC
         LIMIT 1) lm ON (true))
     LEFT JOIN accounts.user_profiles buyer_profile ON ((c.buyer_id = buyer_profile.user_id)))
     LEFT JOIN accounts.user_profiles manager_profile ON ((c.manager_id = manager_profile.user_id)))
     LEFT JOIN properties.listings l ON ((c.listing_id = l.id)))
  WHERE (((c.buyer_id = auth.uid()) OR (c.manager_id = auth.uid())) AND (c.status = ANY (ARRAY['active'::text, 'archived'::text])));


--
-- Name: v_conversations_active_list; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.v_conversations_active_list AS
 SELECT v_conversations_list.id,
    v_conversations_list.listing_id,
    v_conversations_list.buyer_id,
    v_conversations_list.manager_id,
    v_conversations_list.buyer_display_name,
    v_conversations_list.manager_display_name,
    v_conversations_list.last_message_snippet,
    v_conversations_list.last_message_at,
    v_conversations_list.last_sender_id,
    v_conversations_list.is_system_message,
    v_conversations_list.pseudonym_active,
    v_conversations_list.listing_is_private,
    v_conversations_list.status,
    v_conversations_list.listing_title,
    v_conversations_list.unread_count,
    v_conversations_list.is_custom_search,
    v_conversations_list.search_id
   FROM public.v_conversations_list
  WHERE (v_conversations_list.status = 'active'::text);


--
-- Name: v_conversations_archived_list; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.v_conversations_archived_list AS
 SELECT v_conversations_list.id,
    v_conversations_list.listing_id,
    v_conversations_list.buyer_id,
    v_conversations_list.manager_id,
    v_conversations_list.buyer_display_name,
    v_conversations_list.manager_display_name,
    v_conversations_list.last_message_snippet,
    v_conversations_list.last_message_at,
    v_conversations_list.last_sender_id,
    v_conversations_list.is_system_message,
    v_conversations_list.pseudonym_active,
    v_conversations_list.listing_is_private,
    v_conversations_list.status,
    v_conversations_list.listing_title,
    v_conversations_list.unread_count,
    v_conversations_list.is_custom_search,
    v_conversations_list.search_id
   FROM public.v_conversations_list
  WHERE (v_conversations_list.status = 'archived'::text);


--
-- Name: v_manager_pseudonyms; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.v_manager_pseudonyms AS
 SELECT pseudonyms.id,
    pseudonyms.name
   FROM public.pseudonyms
  WHERE (pseudonyms.type = 'manager'::text);


--
-- Name: messages; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.messages (
    topic text NOT NULL,
    extension text NOT NULL,
    payload jsonb,
    event text,
    private boolean DEFAULT false,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    inserted_at timestamp without time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL
)
PARTITION BY RANGE (inserted_at);


--
-- Name: schema_migrations; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.schema_migrations (
    version bigint NOT NULL,
    inserted_at timestamp(0) without time zone
);


--
-- Name: subscription; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.subscription (
    id bigint NOT NULL,
    subscription_id uuid NOT NULL,
    entity regclass NOT NULL,
    filters realtime.user_defined_filter[] DEFAULT '{}'::realtime.user_defined_filter[] NOT NULL,
    claims jsonb NOT NULL,
    claims_role regrole GENERATED ALWAYS AS (realtime.to_regrole((claims ->> 'role'::text))) STORED NOT NULL,
    created_at timestamp without time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);


--
-- Name: subscription_id_seq; Type: SEQUENCE; Schema: realtime; Owner: -
--

ALTER TABLE realtime.subscription ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME realtime.subscription_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: buckets; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.buckets (
    id text NOT NULL,
    name text NOT NULL,
    owner uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    public boolean DEFAULT false,
    avif_autodetection boolean DEFAULT false,
    file_size_limit bigint,
    allowed_mime_types text[],
    owner_id text
);


--
-- Name: COLUMN buckets.owner; Type: COMMENT; Schema: storage; Owner: -
--

COMMENT ON COLUMN storage.buckets.owner IS 'Field is deprecated, use owner_id instead';


--
-- Name: migrations; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.migrations (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    hash character varying(40) NOT NULL,
    executed_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: objects; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.objects (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    bucket_id text,
    name text,
    owner uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    last_accessed_at timestamp with time zone DEFAULT now(),
    metadata jsonb,
    path_tokens text[] GENERATED ALWAYS AS (string_to_array(name, '/'::text)) STORED,
    version text,
    owner_id text,
    user_metadata jsonb,
    level integer
);


--
-- Name: COLUMN objects.owner; Type: COMMENT; Schema: storage; Owner: -
--

COMMENT ON COLUMN storage.objects.owner IS 'Field is deprecated, use owner_id instead';


--
-- Name: prefixes; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.prefixes (
    bucket_id text NOT NULL,
    name text NOT NULL COLLATE pg_catalog."C",
    level integer GENERATED ALWAYS AS (storage.get_level(name)) STORED NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: s3_multipart_uploads; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.s3_multipart_uploads (
    id text NOT NULL,
    in_progress_size bigint DEFAULT 0 NOT NULL,
    upload_signature text NOT NULL,
    bucket_id text NOT NULL,
    key text NOT NULL COLLATE pg_catalog."C",
    version text NOT NULL,
    owner_id text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    user_metadata jsonb
);


--
-- Name: s3_multipart_uploads_parts; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.s3_multipart_uploads_parts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    upload_id text NOT NULL,
    size bigint DEFAULT 0 NOT NULL,
    part_number integer NOT NULL,
    bucket_id text NOT NULL,
    key text NOT NULL COLLATE pg_catalog."C",
    etag text NOT NULL,
    owner_id text,
    version text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: hooks; Type: TABLE; Schema: supabase_functions; Owner: -
--

CREATE TABLE supabase_functions.hooks (
    id bigint NOT NULL,
    hook_table_id integer NOT NULL,
    hook_name text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    request_id bigint
);


--
-- Name: TABLE hooks; Type: COMMENT; Schema: supabase_functions; Owner: -
--

COMMENT ON TABLE supabase_functions.hooks IS 'Supabase Functions Hooks: Audit trail for triggered hooks.';


--
-- Name: hooks_id_seq; Type: SEQUENCE; Schema: supabase_functions; Owner: -
--

CREATE SEQUENCE supabase_functions.hooks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: hooks_id_seq; Type: SEQUENCE OWNED BY; Schema: supabase_functions; Owner: -
--

ALTER SEQUENCE supabase_functions.hooks_id_seq OWNED BY supabase_functions.hooks.id;


--
-- Name: migrations; Type: TABLE; Schema: supabase_functions; Owner: -
--

CREATE TABLE supabase_functions.migrations (
    version text NOT NULL,
    inserted_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: schema_migrations; Type: TABLE; Schema: supabase_migrations; Owner: -
--

CREATE TABLE supabase_migrations.schema_migrations (
    version text NOT NULL,
    statements text[],
    name text
);


--
-- Name: settings; Type: TABLE; Schema: system; Owner: -
--

CREATE TABLE system.settings (
    key text NOT NULL,
    value text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: refresh_tokens id; Type: DEFAULT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.refresh_tokens ALTER COLUMN id SET DEFAULT nextval('auth.refresh_tokens_id_seq'::regclass);


--
-- Name: pseudonyms id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pseudonyms ALTER COLUMN id SET DEFAULT nextval('public.pseudonyms_id_seq'::regclass);


--
-- Name: hooks id; Type: DEFAULT; Schema: supabase_functions; Owner: -
--

ALTER TABLE ONLY supabase_functions.hooks ALTER COLUMN id SET DEFAULT nextval('supabase_functions.hooks_id_seq'::regclass);


--
-- Name: extensions extensions_pkey; Type: CONSTRAINT; Schema: _realtime; Owner: -
--

ALTER TABLE ONLY _realtime.extensions
    ADD CONSTRAINT extensions_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: _realtime; Owner: -
--

ALTER TABLE ONLY _realtime.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: tenants tenants_pkey; Type: CONSTRAINT; Schema: _realtime; Owner: -
--

ALTER TABLE ONLY _realtime.tenants
    ADD CONSTRAINT tenants_pkey PRIMARY KEY (id);


--
-- Name: license_verification license_verification_pkey; Type: CONSTRAINT; Schema: accounts; Owner: -
--

ALTER TABLE ONLY accounts.license_verification
    ADD CONSTRAINT license_verification_pkey PRIMARY KEY (id);


--
-- Name: license_verification license_verification_user_id_key; Type: CONSTRAINT; Schema: accounts; Owner: -
--

ALTER TABLE ONLY accounts.license_verification
    ADD CONSTRAINT license_verification_user_id_key UNIQUE (user_id);


--
-- Name: saved_searches saved_searches_pkey; Type: CONSTRAINT; Schema: accounts; Owner: -
--

ALTER TABLE ONLY accounts.saved_searches
    ADD CONSTRAINT saved_searches_pkey PRIMARY KEY (id);


--
-- Name: user_profiles user_profiles_email_key; Type: CONSTRAINT; Schema: accounts; Owner: -
--

ALTER TABLE ONLY accounts.user_profiles
    ADD CONSTRAINT user_profiles_email_key UNIQUE (email);


--
-- Name: user_profiles user_profiles_pkey; Type: CONSTRAINT; Schema: accounts; Owner: -
--

ALTER TABLE ONLY accounts.user_profiles
    ADD CONSTRAINT user_profiles_pkey PRIMARY KEY (id);


--
-- Name: user_profiles user_profiles_user_id_key; Type: CONSTRAINT; Schema: accounts; Owner: -
--

ALTER TABLE ONLY accounts.user_profiles
    ADD CONSTRAINT user_profiles_user_id_key UNIQUE (user_id);


--
-- Name: batch_config batch_config_pkey; Type: CONSTRAINT; Schema: admin; Owner: -
--

ALTER TABLE ONLY admin.batch_config
    ADD CONSTRAINT batch_config_pkey PRIMARY KEY (key);


--
-- Name: mfa_amr_claims amr_id_pk; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_amr_claims
    ADD CONSTRAINT amr_id_pk PRIMARY KEY (id);


--
-- Name: audit_log_entries audit_log_entries_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.audit_log_entries
    ADD CONSTRAINT audit_log_entries_pkey PRIMARY KEY (id);


--
-- Name: flow_state flow_state_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.flow_state
    ADD CONSTRAINT flow_state_pkey PRIMARY KEY (id);


--
-- Name: identities identities_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.identities
    ADD CONSTRAINT identities_pkey PRIMARY KEY (id);


--
-- Name: identities identities_provider_id_provider_unique; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.identities
    ADD CONSTRAINT identities_provider_id_provider_unique UNIQUE (provider_id, provider);


--
-- Name: instances instances_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.instances
    ADD CONSTRAINT instances_pkey PRIMARY KEY (id);


--
-- Name: mfa_amr_claims mfa_amr_claims_session_id_authentication_method_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_amr_claims
    ADD CONSTRAINT mfa_amr_claims_session_id_authentication_method_pkey UNIQUE (session_id, authentication_method);


--
-- Name: mfa_challenges mfa_challenges_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_challenges
    ADD CONSTRAINT mfa_challenges_pkey PRIMARY KEY (id);


--
-- Name: mfa_factors mfa_factors_last_challenged_at_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_factors
    ADD CONSTRAINT mfa_factors_last_challenged_at_key UNIQUE (last_challenged_at);


--
-- Name: mfa_factors mfa_factors_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_factors
    ADD CONSTRAINT mfa_factors_pkey PRIMARY KEY (id);


--
-- Name: one_time_tokens one_time_tokens_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.one_time_tokens
    ADD CONSTRAINT one_time_tokens_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_token_unique; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_token_unique UNIQUE (token);


--
-- Name: saml_providers saml_providers_entity_id_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_providers
    ADD CONSTRAINT saml_providers_entity_id_key UNIQUE (entity_id);


--
-- Name: saml_providers saml_providers_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_providers
    ADD CONSTRAINT saml_providers_pkey PRIMARY KEY (id);


--
-- Name: saml_relay_states saml_relay_states_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_relay_states
    ADD CONSTRAINT saml_relay_states_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sso_domains sso_domains_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sso_domains
    ADD CONSTRAINT sso_domains_pkey PRIMARY KEY (id);


--
-- Name: sso_providers sso_providers_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sso_providers
    ADD CONSTRAINT sso_providers_pkey PRIMARY KEY (id);


--
-- Name: users users_phone_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_phone_key UNIQUE (phone);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: amenities amenities_pkey; Type: CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.amenities
    ADD CONSTRAINT amenities_pkey PRIMARY KEY (id);


--
-- Name: conditions conditions_pkey; Type: CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.conditions
    ADD CONSTRAINT conditions_pkey PRIMARY KEY (id);


--
-- Name: listing_amenities listing_amenities_pkey; Type: CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.listing_amenities
    ADD CONSTRAINT listing_amenities_pkey PRIMARY KEY (listing_id, amenity_id);


--
-- Name: listing_comments listing_comments_pkey; Type: CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.listing_comments
    ADD CONSTRAINT listing_comments_pkey PRIMARY KEY (id);


--
-- Name: listings listings_pkey; Type: CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.listings
    ADD CONSTRAINT listings_pkey PRIMARY KEY (id);


--
-- Name: property_identifiers property_identifiers_listing_id_identifier_type_key; Type: CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.property_identifiers
    ADD CONSTRAINT property_identifiers_listing_id_identifier_type_key UNIQUE (listing_id, identifier_type);


--
-- Name: property_identifiers property_identifiers_pkey; Type: CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.property_identifiers
    ADD CONSTRAINT property_identifiers_pkey PRIMARY KEY (id);


--
-- Name: property_media property_media_pkey; Type: CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.property_media
    ADD CONSTRAINT property_media_pkey PRIMARY KEY (id);


--
-- Name: property_types property_types_pkey; Type: CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.property_types
    ADD CONSTRAINT property_types_pkey PRIMARY KEY (id);


--
-- Name: conversations conversations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.conversations
    ADD CONSTRAINT conversations_pkey PRIMARY KEY (id);


--
-- Name: custom_search_matches custom_search_matches_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.custom_search_matches
    ADD CONSTRAINT custom_search_matches_pkey PRIMARY KEY (id);


--
-- Name: custom_search_matches custom_search_matches_search_id_listing_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.custom_search_matches
    ADD CONSTRAINT custom_search_matches_search_id_listing_id_key UNIQUE (search_id, listing_id);


--
-- Name: listing_embeddings listing_embeddings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.listing_embeddings
    ADD CONSTRAINT listing_embeddings_pkey PRIMARY KEY (listing_id);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- Name: pseudonyms pseudonyms_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pseudonyms
    ADD CONSTRAINT pseudonyms_name_key UNIQUE (name);


--
-- Name: pseudonyms pseudonyms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pseudonyms
    ADD CONSTRAINT pseudonyms_pkey PRIMARY KEY (id);


--
-- Name: push_subscriptions push_subscriptions_endpoint_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.push_subscriptions
    ADD CONSTRAINT push_subscriptions_endpoint_key UNIQUE (endpoint);


--
-- Name: push_subscriptions push_subscriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.push_subscriptions
    ADD CONSTRAINT push_subscriptions_pkey PRIMARY KEY (id);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id, inserted_at);


--
-- Name: subscription pk_subscription; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.subscription
    ADD CONSTRAINT pk_subscription PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: buckets buckets_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.buckets
    ADD CONSTRAINT buckets_pkey PRIMARY KEY (id);


--
-- Name: migrations migrations_name_key; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.migrations
    ADD CONSTRAINT migrations_name_key UNIQUE (name);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: objects objects_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.objects
    ADD CONSTRAINT objects_pkey PRIMARY KEY (id);


--
-- Name: prefixes prefixes_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.prefixes
    ADD CONSTRAINT prefixes_pkey PRIMARY KEY (bucket_id, level, name);


--
-- Name: s3_multipart_uploads_parts s3_multipart_uploads_parts_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads_parts
    ADD CONSTRAINT s3_multipart_uploads_parts_pkey PRIMARY KEY (id);


--
-- Name: s3_multipart_uploads s3_multipart_uploads_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads
    ADD CONSTRAINT s3_multipart_uploads_pkey PRIMARY KEY (id);


--
-- Name: hooks hooks_pkey; Type: CONSTRAINT; Schema: supabase_functions; Owner: -
--

ALTER TABLE ONLY supabase_functions.hooks
    ADD CONSTRAINT hooks_pkey PRIMARY KEY (id);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: supabase_functions; Owner: -
--

ALTER TABLE ONLY supabase_functions.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (version);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: supabase_migrations; Owner: -
--

ALTER TABLE ONLY supabase_migrations.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: settings settings_pkey; Type: CONSTRAINT; Schema: system; Owner: -
--

ALTER TABLE ONLY system.settings
    ADD CONSTRAINT settings_pkey PRIMARY KEY (key);


--
-- Name: extensions_tenant_external_id_index; Type: INDEX; Schema: _realtime; Owner: -
--

CREATE INDEX extensions_tenant_external_id_index ON _realtime.extensions USING btree (tenant_external_id);


--
-- Name: extensions_tenant_external_id_type_index; Type: INDEX; Schema: _realtime; Owner: -
--

CREATE UNIQUE INDEX extensions_tenant_external_id_type_index ON _realtime.extensions USING btree (tenant_external_id, type);


--
-- Name: tenants_external_id_index; Type: INDEX; Schema: _realtime; Owner: -
--

CREATE UNIQUE INDEX tenants_external_id_index ON _realtime.tenants USING btree (external_id);


--
-- Name: idx_saved_searches_query_embedding; Type: INDEX; Schema: accounts; Owner: -
--

CREATE INDEX idx_saved_searches_query_embedding ON accounts.saved_searches USING hnsw (query_embedding public.vector_cosine_ops);


--
-- Name: audit_logs_instance_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX audit_logs_instance_id_idx ON auth.audit_log_entries USING btree (instance_id);


--
-- Name: confirmation_token_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX confirmation_token_idx ON auth.users USING btree (confirmation_token) WHERE ((confirmation_token)::text !~ '^[0-9 ]*$'::text);


--
-- Name: email_change_token_current_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX email_change_token_current_idx ON auth.users USING btree (email_change_token_current) WHERE ((email_change_token_current)::text !~ '^[0-9 ]*$'::text);


--
-- Name: email_change_token_new_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX email_change_token_new_idx ON auth.users USING btree (email_change_token_new) WHERE ((email_change_token_new)::text !~ '^[0-9 ]*$'::text);


--
-- Name: factor_id_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX factor_id_created_at_idx ON auth.mfa_factors USING btree (user_id, created_at);


--
-- Name: flow_state_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX flow_state_created_at_idx ON auth.flow_state USING btree (created_at DESC);


--
-- Name: identities_email_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX identities_email_idx ON auth.identities USING btree (email text_pattern_ops);


--
-- Name: INDEX identities_email_idx; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON INDEX auth.identities_email_idx IS 'Auth: Ensures indexed queries on the email column';


--
-- Name: identities_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX identities_user_id_idx ON auth.identities USING btree (user_id);


--
-- Name: idx_auth_code; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX idx_auth_code ON auth.flow_state USING btree (auth_code);


--
-- Name: idx_user_id_auth_method; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX idx_user_id_auth_method ON auth.flow_state USING btree (user_id, authentication_method);


--
-- Name: mfa_challenge_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX mfa_challenge_created_at_idx ON auth.mfa_challenges USING btree (created_at DESC);


--
-- Name: mfa_factors_user_friendly_name_unique; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX mfa_factors_user_friendly_name_unique ON auth.mfa_factors USING btree (friendly_name, user_id) WHERE (TRIM(BOTH FROM friendly_name) <> ''::text);


--
-- Name: mfa_factors_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX mfa_factors_user_id_idx ON auth.mfa_factors USING btree (user_id);


--
-- Name: one_time_tokens_relates_to_hash_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX one_time_tokens_relates_to_hash_idx ON auth.one_time_tokens USING hash (relates_to);


--
-- Name: one_time_tokens_token_hash_hash_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX one_time_tokens_token_hash_hash_idx ON auth.one_time_tokens USING hash (token_hash);


--
-- Name: one_time_tokens_user_id_token_type_key; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX one_time_tokens_user_id_token_type_key ON auth.one_time_tokens USING btree (user_id, token_type);


--
-- Name: reauthentication_token_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX reauthentication_token_idx ON auth.users USING btree (reauthentication_token) WHERE ((reauthentication_token)::text !~ '^[0-9 ]*$'::text);


--
-- Name: recovery_token_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX recovery_token_idx ON auth.users USING btree (recovery_token) WHERE ((recovery_token)::text !~ '^[0-9 ]*$'::text);


--
-- Name: refresh_tokens_instance_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_instance_id_idx ON auth.refresh_tokens USING btree (instance_id);


--
-- Name: refresh_tokens_instance_id_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_instance_id_user_id_idx ON auth.refresh_tokens USING btree (instance_id, user_id);


--
-- Name: refresh_tokens_parent_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_parent_idx ON auth.refresh_tokens USING btree (parent);


--
-- Name: refresh_tokens_session_id_revoked_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_session_id_revoked_idx ON auth.refresh_tokens USING btree (session_id, revoked);


--
-- Name: refresh_tokens_updated_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_updated_at_idx ON auth.refresh_tokens USING btree (updated_at DESC);


--
-- Name: saml_providers_sso_provider_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX saml_providers_sso_provider_id_idx ON auth.saml_providers USING btree (sso_provider_id);


--
-- Name: saml_relay_states_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX saml_relay_states_created_at_idx ON auth.saml_relay_states USING btree (created_at DESC);


--
-- Name: saml_relay_states_for_email_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX saml_relay_states_for_email_idx ON auth.saml_relay_states USING btree (for_email);


--
-- Name: saml_relay_states_sso_provider_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX saml_relay_states_sso_provider_id_idx ON auth.saml_relay_states USING btree (sso_provider_id);


--
-- Name: sessions_not_after_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX sessions_not_after_idx ON auth.sessions USING btree (not_after DESC);


--
-- Name: sessions_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX sessions_user_id_idx ON auth.sessions USING btree (user_id);


--
-- Name: sso_domains_domain_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX sso_domains_domain_idx ON auth.sso_domains USING btree (lower(domain));


--
-- Name: sso_domains_sso_provider_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX sso_domains_sso_provider_id_idx ON auth.sso_domains USING btree (sso_provider_id);


--
-- Name: sso_providers_resource_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX sso_providers_resource_id_idx ON auth.sso_providers USING btree (lower(resource_id));


--
-- Name: unique_phone_factor_per_user; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX unique_phone_factor_per_user ON auth.mfa_factors USING btree (user_id, phone);


--
-- Name: user_id_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX user_id_created_at_idx ON auth.sessions USING btree (user_id, created_at);


--
-- Name: users_email_partial_key; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX users_email_partial_key ON auth.users USING btree (email) WHERE (is_sso_user = false);


--
-- Name: INDEX users_email_partial_key; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON INDEX auth.users_email_partial_key IS 'Auth: A partial unique index that applies only when is_sso_user is false';


--
-- Name: users_instance_id_email_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX users_instance_id_email_idx ON auth.users USING btree (instance_id, lower((email)::text));


--
-- Name: users_instance_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX users_instance_id_idx ON auth.users USING btree (instance_id);


--
-- Name: users_is_anonymous_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX users_is_anonymous_idx ON auth.users USING btree (is_anonymous);


--
-- Name: idx_conversations_is_custom_search; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_conversations_is_custom_search ON public.conversations USING btree (is_custom_search);


--
-- Name: idx_conversations_last_message_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_conversations_last_message_at ON public.conversations USING btree (last_message_at DESC NULLS LAST);


--
-- Name: idx_conversations_participants; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_conversations_participants ON public.conversations USING btree (buyer_id, manager_id);


--
-- Name: idx_conversations_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_conversations_status ON public.conversations USING btree (status);


--
-- Name: idx_listing_embeddings_embedding; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_listing_embeddings_embedding ON public.listing_embeddings USING hnsw (embedding public.vector_cosine_ops);


--
-- Name: idx_listing_embeddings_last_embedded_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_listing_embeddings_last_embedded_at ON public.listing_embeddings USING btree (last_embedded_at);


--
-- Name: ix_realtime_subscription_entity; Type: INDEX; Schema: realtime; Owner: -
--

CREATE INDEX ix_realtime_subscription_entity ON realtime.subscription USING btree (entity);


--
-- Name: subscription_subscription_id_entity_filters_key; Type: INDEX; Schema: realtime; Owner: -
--

CREATE UNIQUE INDEX subscription_subscription_id_entity_filters_key ON realtime.subscription USING btree (subscription_id, entity, filters);


--
-- Name: bname; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX bname ON storage.buckets USING btree (name);


--
-- Name: bucketid_objname; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX bucketid_objname ON storage.objects USING btree (bucket_id, name);


--
-- Name: idx_multipart_uploads_list; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX idx_multipart_uploads_list ON storage.s3_multipart_uploads USING btree (bucket_id, key, created_at);


--
-- Name: idx_name_bucket_unique; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX idx_name_bucket_unique ON storage.objects USING btree (name COLLATE "C", bucket_id);


--
-- Name: idx_objects_bucket_id_name; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX idx_objects_bucket_id_name ON storage.objects USING btree (bucket_id, name COLLATE "C");


--
-- Name: idx_objects_lower_name; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX idx_objects_lower_name ON storage.objects USING btree ((path_tokens[level]), lower(name) text_pattern_ops, bucket_id, level);


--
-- Name: idx_prefixes_lower_name; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX idx_prefixes_lower_name ON storage.prefixes USING btree (bucket_id, level, ((string_to_array(name, '/'::text))[level]), lower(name) text_pattern_ops);


--
-- Name: name_prefix_search; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX name_prefix_search ON storage.objects USING btree (name text_pattern_ops);


--
-- Name: objects_bucket_id_level_idx; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX objects_bucket_id_level_idx ON storage.objects USING btree (bucket_id, level, name COLLATE "C");


--
-- Name: supabase_functions_hooks_h_table_id_h_name_idx; Type: INDEX; Schema: supabase_functions; Owner: -
--

CREATE INDEX supabase_functions_hooks_h_table_id_h_name_idx ON supabase_functions.hooks USING btree (hook_table_id, hook_name);


--
-- Name: supabase_functions_hooks_request_id_idx; Type: INDEX; Schema: supabase_functions; Owner: -
--

CREATE INDEX supabase_functions_hooks_request_id_idx ON supabase_functions.hooks USING btree (request_id);


--
-- Name: users sync_user_email_trigger; Type: TRIGGER; Schema: auth; Owner: -
--

CREATE TRIGGER sync_user_email_trigger AFTER INSERT OR UPDATE OF email ON auth.users FOR EACH ROW EXECUTE FUNCTION public.sync_user_email();


--
-- Name: listings update_listing_approval_fields_trigger; Type: TRIGGER; Schema: properties; Owner: -
--

CREATE TRIGGER update_listing_approval_fields_trigger BEFORE UPDATE ON properties.listings FOR EACH ROW WHEN ((new.status = 'approved'::text)) EXECUTE FUNCTION properties.update_listing_approval_fields();


--
-- Name: listings update_listing_rejection_fields_trigger; Type: TRIGGER; Schema: properties; Owner: -
--

CREATE TRIGGER update_listing_rejection_fields_trigger BEFORE UPDATE ON properties.listings FOR EACH ROW WHEN ((new.status = 'rejected'::text)) EXECUTE FUNCTION properties.update_listing_rejection_fields();


--
-- Name: messages system_message_updates_trigger; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER system_message_updates_trigger AFTER INSERT ON public.messages FOR EACH ROW WHEN ((new.is_system_message = true)) EXECUTE FUNCTION public.handle_system_message_updates();


--
-- Name: messages update_saved_search_response_timestamp_trigger; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_saved_search_response_timestamp_trigger AFTER INSERT ON public.messages FOR EACH ROW EXECUTE FUNCTION public.update_saved_search_response_timestamp();


--
-- Name: subscription tr_check_filters; Type: TRIGGER; Schema: realtime; Owner: -
--

CREATE TRIGGER tr_check_filters BEFORE INSERT OR UPDATE ON realtime.subscription FOR EACH ROW EXECUTE FUNCTION realtime.subscription_check_filters();


--
-- Name: objects objects_delete_delete_prefix; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER objects_delete_delete_prefix AFTER DELETE ON storage.objects FOR EACH ROW EXECUTE FUNCTION storage.delete_prefix_hierarchy_trigger();


--
-- Name: objects objects_insert_create_prefix; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER objects_insert_create_prefix BEFORE INSERT ON storage.objects FOR EACH ROW EXECUTE FUNCTION storage.objects_insert_prefix_trigger();


--
-- Name: objects objects_update_create_prefix; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER objects_update_create_prefix BEFORE UPDATE ON storage.objects FOR EACH ROW WHEN ((new.name <> old.name)) EXECUTE FUNCTION storage.objects_insert_prefix_trigger();


--
-- Name: prefixes prefixes_create_hierarchy; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER prefixes_create_hierarchy BEFORE INSERT ON storage.prefixes FOR EACH ROW WHEN ((pg_trigger_depth() < 1)) EXECUTE FUNCTION storage.prefixes_insert_trigger();


--
-- Name: prefixes prefixes_delete_hierarchy; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER prefixes_delete_hierarchy AFTER DELETE ON storage.prefixes FOR EACH ROW EXECUTE FUNCTION storage.delete_prefix_hierarchy_trigger();


--
-- Name: objects update_objects_updated_at; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER update_objects_updated_at BEFORE UPDATE ON storage.objects FOR EACH ROW EXECUTE FUNCTION storage.update_updated_at_column();


--
-- Name: extensions extensions_tenant_external_id_fkey; Type: FK CONSTRAINT; Schema: _realtime; Owner: -
--

ALTER TABLE ONLY _realtime.extensions
    ADD CONSTRAINT extensions_tenant_external_id_fkey FOREIGN KEY (tenant_external_id) REFERENCES _realtime.tenants(external_id) ON DELETE CASCADE;


--
-- Name: license_verification license_verification_user_id_fkey; Type: FK CONSTRAINT; Schema: accounts; Owner: -
--

ALTER TABLE ONLY accounts.license_verification
    ADD CONSTRAINT license_verification_user_id_fkey FOREIGN KEY (user_id) REFERENCES accounts.user_profiles(user_id) ON DELETE CASCADE;


--
-- Name: identities identities_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.identities
    ADD CONSTRAINT identities_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: mfa_amr_claims mfa_amr_claims_session_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_amr_claims
    ADD CONSTRAINT mfa_amr_claims_session_id_fkey FOREIGN KEY (session_id) REFERENCES auth.sessions(id) ON DELETE CASCADE;


--
-- Name: mfa_challenges mfa_challenges_auth_factor_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_challenges
    ADD CONSTRAINT mfa_challenges_auth_factor_id_fkey FOREIGN KEY (factor_id) REFERENCES auth.mfa_factors(id) ON DELETE CASCADE;


--
-- Name: mfa_factors mfa_factors_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_factors
    ADD CONSTRAINT mfa_factors_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: one_time_tokens one_time_tokens_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.one_time_tokens
    ADD CONSTRAINT one_time_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: refresh_tokens refresh_tokens_session_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_session_id_fkey FOREIGN KEY (session_id) REFERENCES auth.sessions(id) ON DELETE CASCADE;


--
-- Name: saml_providers saml_providers_sso_provider_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_providers
    ADD CONSTRAINT saml_providers_sso_provider_id_fkey FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE;


--
-- Name: saml_relay_states saml_relay_states_flow_state_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_relay_states
    ADD CONSTRAINT saml_relay_states_flow_state_id_fkey FOREIGN KEY (flow_state_id) REFERENCES auth.flow_state(id) ON DELETE CASCADE;


--
-- Name: saml_relay_states saml_relay_states_sso_provider_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_relay_states
    ADD CONSTRAINT saml_relay_states_sso_provider_id_fkey FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE;


--
-- Name: sessions sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: sso_domains sso_domains_sso_provider_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sso_domains
    ADD CONSTRAINT sso_domains_sso_provider_id_fkey FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE;


--
-- Name: listings fk_condition; Type: FK CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.listings
    ADD CONSTRAINT fk_condition FOREIGN KEY (condition_id) REFERENCES properties.conditions(id);


--
-- Name: listings fk_property_type; Type: FK CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.listings
    ADD CONSTRAINT fk_property_type FOREIGN KEY (property_type_id) REFERENCES properties.property_types(id);


--
-- Name: listing_amenities listing_amenities_amenity_id_fkey; Type: FK CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.listing_amenities
    ADD CONSTRAINT listing_amenities_amenity_id_fkey FOREIGN KEY (amenity_id) REFERENCES properties.amenities(id) ON DELETE CASCADE;


--
-- Name: listing_amenities listing_amenities_listing_id_fkey; Type: FK CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.listing_amenities
    ADD CONSTRAINT listing_amenities_listing_id_fkey FOREIGN KEY (listing_id) REFERENCES properties.listings(id) ON DELETE CASCADE;


--
-- Name: listing_comments listing_comments_listing_id_fkey; Type: FK CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.listing_comments
    ADD CONSTRAINT listing_comments_listing_id_fkey FOREIGN KEY (listing_id) REFERENCES properties.listings(id) ON DELETE CASCADE;


--
-- Name: property_identifiers property_identifiers_listing_id_fkey; Type: FK CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.property_identifiers
    ADD CONSTRAINT property_identifiers_listing_id_fkey FOREIGN KEY (listing_id) REFERENCES properties.listings(id) ON DELETE CASCADE;


--
-- Name: property_media property_media_listing_id_fkey; Type: FK CONSTRAINT; Schema: properties; Owner: -
--

ALTER TABLE ONLY properties.property_media
    ADD CONSTRAINT property_media_listing_id_fkey FOREIGN KEY (listing_id) REFERENCES properties.listings(id) ON DELETE CASCADE;


--
-- Name: custom_search_matches custom_search_matches_listing_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.custom_search_matches
    ADD CONSTRAINT custom_search_matches_listing_id_fkey FOREIGN KEY (listing_id) REFERENCES properties.listings(id) ON DELETE CASCADE;


--
-- Name: custom_search_matches custom_search_matches_search_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.custom_search_matches
    ADD CONSTRAINT custom_search_matches_search_id_fkey FOREIGN KEY (search_id) REFERENCES accounts.saved_searches(id) ON DELETE CASCADE;


--
-- Name: listing_embeddings listing_embeddings_listing_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.listing_embeddings
    ADD CONSTRAINT listing_embeddings_listing_id_fkey FOREIGN KEY (listing_id) REFERENCES properties.listings(id) ON DELETE CASCADE;


--
-- Name: messages messages_conversation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_conversation_id_fkey FOREIGN KEY (conversation_id) REFERENCES public.conversations(id) ON DELETE CASCADE;


--
-- Name: objects objects_bucketId_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.objects
    ADD CONSTRAINT "objects_bucketId_fkey" FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: prefixes prefixes_bucketId_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.prefixes
    ADD CONSTRAINT "prefixes_bucketId_fkey" FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: s3_multipart_uploads s3_multipart_uploads_bucket_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads
    ADD CONSTRAINT s3_multipart_uploads_bucket_id_fkey FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: s3_multipart_uploads_parts s3_multipart_uploads_parts_bucket_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads_parts
    ADD CONSTRAINT s3_multipart_uploads_parts_bucket_id_fkey FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: s3_multipart_uploads_parts s3_multipart_uploads_parts_upload_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads_parts
    ADD CONSTRAINT s3_multipart_uploads_parts_upload_id_fkey FOREIGN KEY (upload_id) REFERENCES storage.s3_multipart_uploads(id) ON DELETE CASCADE;


--
-- Name: user_profiles Admins can update all profiles; Type: POLICY; Schema: accounts; Owner: -
--

CREATE POLICY "Admins can update all profiles" ON accounts.user_profiles FOR UPDATE USING ((EXISTS ( SELECT 1
   FROM accounts.user_profiles user_profiles_1
  WHERE ((user_profiles_1.user_id = auth.uid()) AND (user_profiles_1.role = 'admin'::text)))));


--
-- Name: user_profiles Admins can view all profiles; Type: POLICY; Schema: accounts; Owner: -
--

CREATE POLICY "Admins can view all profiles" ON accounts.user_profiles FOR SELECT USING ((EXISTS ( SELECT 1
   FROM accounts.user_profiles user_profiles_1
  WHERE ((user_profiles_1.user_id = auth.uid()) AND (user_profiles_1.role = 'admin'::text)))));


--
-- Name: user_profiles Brokers can view their salespersons' profiles; Type: POLICY; Schema: accounts; Owner: -
--

CREATE POLICY "Brokers can view their salespersons' profiles" ON accounts.user_profiles FOR SELECT USING ((auth.uid() = broker_id));


--
-- Name: user_profiles Users can update their own profile; Type: POLICY; Schema: accounts; Owner: -
--

CREATE POLICY "Users can update their own profile" ON accounts.user_profiles FOR UPDATE USING ((auth.uid() = user_id));


--
-- Name: user_profiles Users can view their own profile; Type: POLICY; Schema: accounts; Owner: -
--

CREATE POLICY "Users can view their own profile" ON accounts.user_profiles FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: license_verification; Type: ROW SECURITY; Schema: accounts; Owner: -
--

ALTER TABLE accounts.license_verification ENABLE ROW LEVEL SECURITY;

--
-- Name: license_verification license_verification_delete_policy; Type: POLICY; Schema: accounts; Owner: -
--

CREATE POLICY license_verification_delete_policy ON accounts.license_verification FOR DELETE USING ((EXISTS ( SELECT 1
   FROM public.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.role = ANY (ARRAY['admin'::text, 'moderator'::text]))))));


--
-- Name: license_verification license_verification_insert_policy; Type: POLICY; Schema: accounts; Owner: -
--

CREATE POLICY license_verification_insert_policy ON accounts.license_verification FOR INSERT WITH CHECK (((user_id = auth.uid()) AND (EXISTS ( SELECT 1
   FROM public.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.role = ANY (ARRAY['broker'::text, 'salesperson'::text])))))));


--
-- Name: license_verification license_verification_select_policy; Type: POLICY; Schema: accounts; Owner: -
--

CREATE POLICY license_verification_select_policy ON accounts.license_verification FOR SELECT USING (((user_id = auth.uid()) OR (EXISTS ( SELECT 1
   FROM public.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.role = ANY (ARRAY['admin'::text, 'moderator'::text])))))));


--
-- Name: license_verification license_verification_update_policy; Type: POLICY; Schema: accounts; Owner: -
--

CREATE POLICY license_verification_update_policy ON accounts.license_verification FOR UPDATE USING (((user_id = auth.uid()) AND (EXISTS ( SELECT 1
   FROM public.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.role = ANY (ARRAY['broker'::text, 'salesperson'::text]))))))) WITH CHECK (((user_id = auth.uid()) AND (EXISTS ( SELECT 1
   FROM public.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.role = ANY (ARRAY['broker'::text, 'salesperson'::text])))))));


--
-- Name: saved_searches; Type: ROW SECURITY; Schema: accounts; Owner: -
--

ALTER TABLE accounts.saved_searches ENABLE ROW LEVEL SECURITY;

--
-- Name: user_profiles; Type: ROW SECURITY; Schema: accounts; Owner: -
--

ALTER TABLE accounts.user_profiles ENABLE ROW LEVEL SECURITY;

--
-- Name: audit_log_entries; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.audit_log_entries ENABLE ROW LEVEL SECURITY;

--
-- Name: flow_state; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.flow_state ENABLE ROW LEVEL SECURITY;

--
-- Name: identities; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.identities ENABLE ROW LEVEL SECURITY;

--
-- Name: instances; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.instances ENABLE ROW LEVEL SECURITY;

--
-- Name: mfa_amr_claims; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.mfa_amr_claims ENABLE ROW LEVEL SECURITY;

--
-- Name: mfa_challenges; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.mfa_challenges ENABLE ROW LEVEL SECURITY;

--
-- Name: mfa_factors; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.mfa_factors ENABLE ROW LEVEL SECURITY;

--
-- Name: one_time_tokens; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.one_time_tokens ENABLE ROW LEVEL SECURITY;

--
-- Name: refresh_tokens; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.refresh_tokens ENABLE ROW LEVEL SECURITY;

--
-- Name: saml_providers; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.saml_providers ENABLE ROW LEVEL SECURITY;

--
-- Name: saml_relay_states; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.saml_relay_states ENABLE ROW LEVEL SECURITY;

--
-- Name: schema_migrations; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.schema_migrations ENABLE ROW LEVEL SECURITY;

--
-- Name: sessions; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.sessions ENABLE ROW LEVEL SECURITY;

--
-- Name: sso_domains; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.sso_domains ENABLE ROW LEVEL SECURITY;

--
-- Name: sso_providers; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.sso_providers ENABLE ROW LEVEL SECURITY;

--
-- Name: users; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

--
-- Name: listings Admins can delete listings; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Admins can delete listings" ON properties.listings FOR DELETE USING ((EXISTS ( SELECT 1
   FROM accounts.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.status = 'active'::text) AND (user_profiles.role = 'admin'::text)))));


--
-- Name: listings Admins can insert and update any listing; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Admins can insert and update any listing" ON properties.listings TO authenticated USING ((EXISTS ( SELECT 1
   FROM accounts.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.role = 'admin'::text)))));


--
-- Name: amenities Anyone can view amenities; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Anyone can view amenities" ON properties.amenities FOR SELECT USING (true);


--
-- Name: conditions Anyone can view conditions; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Anyone can view conditions" ON properties.conditions FOR SELECT USING (true);


--
-- Name: property_media Anyone can view media for public listings; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Anyone can view media for public listings" ON properties.property_media FOR SELECT USING ((EXISTS ( SELECT 1
   FROM properties.listings
  WHERE ((listings.id = property_media.listing_id) AND (listings.status = 'approved'::text) AND (listings.visibility = 'public'::text)))));


--
-- Name: property_types Anyone can view property types; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Anyone can view property types" ON properties.property_types FOR SELECT USING (true);


--
-- Name: listings Anyone can view public listings; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Anyone can view public listings" ON properties.listings FOR SELECT USING (((status = 'approved'::text) AND (visibility = 'public'::text)));


--
-- Name: listings Brokers can insert listings; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Brokers can insert listings" ON properties.listings FOR INSERT TO authenticated WITH CHECK ((EXISTS ( SELECT 1
   FROM accounts.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.status = 'active'::text) AND (user_profiles.role = 'broker'::text)))));


--
-- Name: listings Brokers can update their listings; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Brokers can update their listings" ON properties.listings FOR UPDATE USING ((broker_id = auth.uid()));


--
-- Name: listings Brokers can view all their listings; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Brokers can view all their listings" ON properties.listings FOR SELECT USING ((broker_id = auth.uid()));


--
-- Name: listings Creators can update their draft/review listings; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Creators can update their draft/review listings" ON properties.listings FOR UPDATE USING (((creator_id = auth.uid()) AND ((status = 'draft'::text) OR (status = 'review'::text))));


--
-- Name: listings Enable delete for listing owners and their brokers; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Enable delete for listing owners and their brokers" ON properties.listings FOR DELETE TO authenticated USING (((auth.uid() = creator_id) OR (auth.uid() = broker_id) OR (EXISTS ( SELECT 1
   FROM accounts.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.status = 'active'::text) AND (user_profiles.role = 'broker'::text) AND (user_profiles.id = ( SELECT user_profiles_1.broker_id
           FROM accounts.user_profiles user_profiles_1
          WHERE (user_profiles_1.user_id = listings.creator_id))))))));


--
-- Name: listings Enable update for listing owners and their brokers; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Enable update for listing owners and their brokers" ON properties.listings FOR UPDATE TO authenticated USING (((auth.uid() = creator_id) OR (auth.uid() = broker_id) OR (auth.uid() = manager_id) OR (EXISTS ( SELECT 1
   FROM accounts.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.status = 'active'::text) AND (user_profiles.role = 'broker'::text) AND (user_profiles.id = ( SELECT user_profiles_1.broker_id
           FROM accounts.user_profiles user_profiles_1
          WHERE (user_profiles_1.user_id = listings.creator_id))))))));


--
-- Name: listings Moderators and admins can update all listings; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Moderators and admins can update all listings" ON properties.listings FOR UPDATE USING ((EXISTS ( SELECT 1
   FROM accounts.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.status = 'active'::text) AND (user_profiles.role = ANY (ARRAY['moderator'::text, 'admin'::text]))))));


--
-- Name: listings Moderators and admins can view all listings; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Moderators and admins can view all listings" ON properties.listings FOR SELECT USING ((EXISTS ( SELECT 1
   FROM accounts.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.status = 'active'::text) AND (user_profiles.role = ANY (ARRAY['moderator'::text, 'admin'::text]))))));


--
-- Name: property_media Owners can manage media for own listings; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Owners can manage media for own listings" ON properties.property_media USING ((EXISTS ( SELECT 1
   FROM properties.listings
  WHERE ((listings.id = property_media.listing_id) AND (listings.broker_id = auth.uid())))));


--
-- Name: listings Salespersons can insert listings for their broker; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Salespersons can insert listings for their broker" ON properties.listings FOR INSERT TO authenticated WITH CHECK ((broker_id IN ( SELECT user_profiles.broker_id
   FROM accounts.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.status = 'active'::text) AND (user_profiles.role = 'salesperson'::text) AND (user_profiles.broker_id IS NOT NULL)))));


--
-- Name: property_media Users can add media to their listings; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Users can add media to their listings" ON properties.property_media FOR INSERT WITH CHECK ((EXISTS ( SELECT 1
   FROM properties.listings
  WHERE ((listings.id = property_media.listing_id) AND ((listings.creator_id = auth.uid()) OR (listings.broker_id = auth.uid()))))));


--
-- Name: property_media Users can view media for their listings; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Users can view media for their listings" ON properties.property_media FOR SELECT USING ((EXISTS ( SELECT 1
   FROM properties.listings
  WHERE ((listings.id = property_media.listing_id) AND ((listings.creator_id = auth.uid()) OR (listings.broker_id = auth.uid()) OR (listings.manager_id = auth.uid()))))));


--
-- Name: listings Users can view their own listings; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY "Users can view their own listings" ON properties.listings FOR SELECT USING (((auth.uid() = creator_id) OR (auth.uid() = broker_id) OR (auth.uid() = manager_id)));


--
-- Name: listing_comments admin_moderator_listing_comments_policy; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY admin_moderator_listing_comments_policy ON properties.listing_comments TO authenticated USING ((EXISTS ( SELECT 1
   FROM accounts.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.role = ANY (ARRAY['admin'::text, 'moderator'::text]))))));


--
-- Name: amenities; Type: ROW SECURITY; Schema: properties; Owner: -
--

ALTER TABLE properties.amenities ENABLE ROW LEVEL SECURITY;

--
-- Name: listing_comments broker_view_listing_comments_policy; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY broker_view_listing_comments_policy ON properties.listing_comments FOR SELECT TO authenticated USING ((EXISTS ( SELECT 1
   FROM (properties.listings l
     JOIN accounts.user_profiles up ON ((up.user_id = auth.uid())))
  WHERE ((l.id = listing_comments.listing_id) AND ((l.broker_id = auth.uid()) OR (l.creator_id = auth.uid()) OR (up.role = ANY (ARRAY['admin'::text, 'moderator'::text])))))));


--
-- Name: listing_comments buyer_view_listing_comments_policy; Type: POLICY; Schema: properties; Owner: -
--

CREATE POLICY buyer_view_listing_comments_policy ON properties.listing_comments FOR SELECT TO authenticated USING ((EXISTS ( SELECT 1
   FROM (public.conversations c
     JOIN public.messages m ON ((m.conversation_id = c.id)))
  WHERE ((c.listing_id = c.listing_id) AND ((c.buyer_id = auth.uid()) OR (m.sender_id = auth.uid()))))));


--
-- Name: conditions; Type: ROW SECURITY; Schema: properties; Owner: -
--

ALTER TABLE properties.conditions ENABLE ROW LEVEL SECURITY;

--
-- Name: listing_amenities; Type: ROW SECURITY; Schema: properties; Owner: -
--

ALTER TABLE properties.listing_amenities ENABLE ROW LEVEL SECURITY;

--
-- Name: listing_comments; Type: ROW SECURITY; Schema: properties; Owner: -
--

ALTER TABLE properties.listing_comments ENABLE ROW LEVEL SECURITY;

--
-- Name: listings; Type: ROW SECURITY; Schema: properties; Owner: -
--

ALTER TABLE properties.listings ENABLE ROW LEVEL SECURITY;

--
-- Name: property_identifiers; Type: ROW SECURITY; Schema: properties; Owner: -
--

ALTER TABLE properties.property_identifiers ENABLE ROW LEVEL SECURITY;

--
-- Name: property_media; Type: ROW SECURITY; Schema: properties; Owner: -
--

ALTER TABLE properties.property_media ENABLE ROW LEVEL SECURITY;

--
-- Name: property_types; Type: ROW SECURITY; Schema: properties; Owner: -
--

ALTER TABLE properties.property_types ENABLE ROW LEVEL SECURITY;

--
-- Name: pseudonyms Allow anyone to read pseudonyms; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow anyone to read pseudonyms" ON public.pseudonyms FOR SELECT USING (true);


--
-- Name: custom_search_matches Allow authenticated users to view their own matches; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow authenticated users to view their own matches" ON public.custom_search_matches FOR SELECT USING (((EXISTS ( SELECT 1
   FROM accounts.saved_searches s
  WHERE ((s.id = custom_search_matches.search_id) AND (s.buyer_id = auth.uid())))) OR (EXISTS ( SELECT 1
   FROM properties.listings l
  WHERE ((l.id = custom_search_matches.listing_id) AND ((l.broker_id = auth.uid()) OR (l.creator_id = auth.uid())))))));


--
-- Name: listing_embeddings Allow public read access; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public read access" ON public.listing_embeddings FOR SELECT USING (true);


--
-- Name: listing_embeddings Allow service role full access; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow service role full access" ON public.listing_embeddings USING ((auth.role() = 'service_role'::text)) WITH CHECK ((auth.role() = 'service_role'::text));


--
-- Name: messages Participants can send messages in their conversations; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Participants can send messages in their conversations" ON public.messages FOR INSERT WITH CHECK ((EXISTS ( SELECT 1
   FROM public.conversations
  WHERE ((conversations.id = messages.conversation_id) AND ((conversations.buyer_id = auth.uid()) OR (conversations.manager_id = auth.uid())) AND (conversations.status = 'active'::text)))));


--
-- Name: conversations Participants can update conversation status; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Participants can update conversation status" ON public.conversations FOR UPDATE USING (((auth.uid() = buyer_id) OR (auth.uid() = manager_id)));


--
-- Name: messages Participants can update message read status; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Participants can update message read status" ON public.messages FOR UPDATE USING ((EXISTS ( SELECT 1
   FROM public.conversations
  WHERE ((conversations.id = messages.conversation_id) AND ((conversations.buyer_id = auth.uid()) OR (conversations.manager_id = auth.uid()))))));


--
-- Name: messages Participants can view messages in their conversations; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Participants can view messages in their conversations" ON public.messages FOR SELECT USING ((EXISTS ( SELECT 1
   FROM public.conversations
  WHERE ((conversations.id = messages.conversation_id) AND ((conversations.buyer_id = auth.uid()) OR (conversations.manager_id = auth.uid()))))));


--
-- Name: conversations Participants can view their conversations; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Participants can view their conversations" ON public.conversations FOR SELECT USING (((auth.uid() = buyer_id) OR (auth.uid() = manager_id)));


--
-- Name: conversations; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;

--
-- Name: custom_search_matches; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.custom_search_matches ENABLE ROW LEVEL SECURITY;

--
-- Name: listing_embeddings; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.listing_embeddings ENABLE ROW LEVEL SECURITY;

--
-- Name: messages; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

--
-- Name: pseudonyms; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.pseudonyms ENABLE ROW LEVEL SECURITY;

--
-- Name: push_subscriptions; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.push_subscriptions ENABLE ROW LEVEL SECURITY;

--
-- Name: messages; Type: ROW SECURITY; Schema: realtime; Owner: -
--

ALTER TABLE realtime.messages ENABLE ROW LEVEL SECURITY;

--
-- Name: buckets; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.buckets ENABLE ROW LEVEL SECURITY;

--
-- Name: migrations; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.migrations ENABLE ROW LEVEL SECURITY;

--
-- Name: objects; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

--
-- Name: prefixes; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.prefixes ENABLE ROW LEVEL SECURITY;

--
-- Name: s3_multipart_uploads; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.s3_multipart_uploads ENABLE ROW LEVEL SECURITY;

--
-- Name: s3_multipart_uploads_parts; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.s3_multipart_uploads_parts ENABLE ROW LEVEL SECURITY;

--
-- Name: settings admin_read_system_settings; Type: POLICY; Schema: system; Owner: -
--

CREATE POLICY admin_read_system_settings ON system.settings FOR SELECT USING ((EXISTS ( SELECT 1
   FROM accounts.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.role = 'admin'::text)))));


--
-- Name: settings admin_write_system_settings; Type: POLICY; Schema: system; Owner: -
--

CREATE POLICY admin_write_system_settings ON system.settings USING ((EXISTS ( SELECT 1
   FROM accounts.user_profiles
  WHERE ((user_profiles.user_id = auth.uid()) AND (user_profiles.role = 'admin'::text)))));


--
-- Name: settings; Type: ROW SECURITY; Schema: system; Owner: -
--

ALTER TABLE system.settings ENABLE ROW LEVEL SECURITY;

--
-- Name: supabase_realtime; Type: PUBLICATION; Schema: -; Owner: -
--

CREATE PUBLICATION supabase_realtime WITH (publish = 'insert, update, delete, truncate');


--
-- Name: issue_graphql_placeholder; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER issue_graphql_placeholder ON sql_drop
         WHEN TAG IN ('DROP EXTENSION')
   EXECUTE FUNCTION extensions.set_graphql_placeholder();


--
-- Name: issue_pg_cron_access; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER issue_pg_cron_access ON ddl_command_end
         WHEN TAG IN ('CREATE EXTENSION')
   EXECUTE FUNCTION extensions.grant_pg_cron_access();


--
-- Name: issue_pg_graphql_access; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER issue_pg_graphql_access ON ddl_command_end
         WHEN TAG IN ('CREATE FUNCTION')
   EXECUTE FUNCTION extensions.grant_pg_graphql_access();


--
-- Name: issue_pg_net_access; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER issue_pg_net_access ON ddl_command_end
         WHEN TAG IN ('CREATE EXTENSION')
   EXECUTE FUNCTION extensions.grant_pg_net_access();


--
-- Name: pgrst_ddl_watch; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER pgrst_ddl_watch ON ddl_command_end
   EXECUTE FUNCTION extensions.pgrst_ddl_watch();


--
-- Name: pgrst_drop_watch; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER pgrst_drop_watch ON sql_drop
   EXECUTE FUNCTION extensions.pgrst_drop_watch();


--
-- PostgreSQL database dump complete
--


```
