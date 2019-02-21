# ./tools/build.sh [tag]
docker rmi $(docker images --filter=reference='festival*:dev' -q)
docker build -t festival-app:dev -f ./Dockerfile.app .
docker build -t festival-db:dev -f ./Dockerfile.db .
