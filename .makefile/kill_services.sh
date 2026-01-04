#!/bin/bash

lsof -ti:38501 | xargs kill -9
lsof -ti:38502 | xargs kill -9
lsof -ti:38503 | xargs kill -9
lsof -ti:38504 | xargs kill -9
lsof -ti:38505 | xargs kill -9
lsof -ti:8081 | xargs kill -9
