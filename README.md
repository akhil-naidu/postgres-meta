# `postgres-meta`

A RESTful API for managing your Postgres. Fetch tables, add roles, and run queries (and more).

## Documentation

https://supabase.github.io/postgres-meta/

## Progress

Schema:

- [x] `POST /query` (Execute SQL query)
  - [x] `POST /format` (Format SQL query)
  - [x] `POST /parse` (Parse SQL query into AST)
  - [ ] `POST /explain` (Explain SQL query)
- [x] `/columns`
  - [x] GET (List)
  - [x] POST (`alter table add column`)
  - [x] PATCH (`alter table alter/rename column`)
  - [x] DELETE (`alter table drop column`)
- [x] `/extensions`
  - [x] GET (List)
  - [x] POST (`create extension`)
  - [x] PATCH (`alter extension`)
  - [x] DELETE (`drop extension`)
- [x] `/functions`
  - [x] GET (List)
  - [x] POST (`create function`)
  - [x] PATCH (`alter function`)
  - [x] DELETE (`drop function`)
- [x] `/publications`
  - [x] GET (List)
  - [x] POST (`create publication`)
  - [x] PATCH (`alter publication`)
  - [x] DELETE (`drop publication`)
- [x] `/roles`
  - [x] GET (List)
  - [x] POST (`create role`)
  - [x] PATCH (`alter role`)
  - [x] DELETE (`drop role`)
- [x] `/schemas`
  - [x] GET (List)
  - [x] POST (`create schema`)
  - [x] PATCH (`alter schema`)
  - [x] DELETE (`drop schema`)
- [x] `/tables`
  - [x] GET (List)
  - [x] POST (`create table`)
  - [x] PATCH (`alter table`)
  - [x] DELETE (`drop table`)
- [x] `/triggers`
  - [x] GET (List)
  - [x] POST (`create trigger`)
  - [x] PATCH (`alter trigger`)
  - [x] DELETE (`drop trigger`)
- [ ] `/types`
  - [x] GET (List)
  - [ ] POST (`create type`)
  - [ ] PATCH (`alter type`)
  - [ ] DELETE (`drop type`)

Helpers:

- [ ] `/config`
  - [ ] GET `/version`: Postgres version
- [ ] `/generators`
  - [ ] GET `/openapi`: Generate Open API
  - [ ] GET `/typescript`: Generate Typescript types
