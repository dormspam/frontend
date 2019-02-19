rm -rf server/build
mkdir server/build

npm run build
cp -r .elasticbeanstalk/ server/.elasticbeanstalk/
cp -r build/ server/build/

(cd server; eb deploy frontend)
