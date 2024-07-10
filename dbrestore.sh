#!/bin/bash

set -e

# the name or id of the database container for this composition
DB_CONTAINER=ab358f72e8613c05bde67f269e5e3d31c0aec016b9e4055688492756eb6ec3a2

# one way to get the above automatically
# this only works if there is only one running container with 'database' in it's name
#DB_CONTAINER=$(docker ps --filter "name=database" --format {{.ID}} --filter status=running)

docker exec -i $DB_CONTAINER sh -c 'mariadb -udocker -pdocker docker -e "DROP DATABASE docker; CREATE DATABASE docker;"'

docker exec -i $DB_CONTAINER sh -c 'mariadb -udocker -pdocker docker' < ./data/database.sql
