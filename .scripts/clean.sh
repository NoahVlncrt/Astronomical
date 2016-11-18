#!/bin/sh
echo "Cleaning up uneeded files!"

#.md file variables to delete

SERVER=./server/server.md
PAGES=./imports/ui/pages/pages.md
SERVER2=./imports/startup/server/server.md
API=./imports/api/api.md

# start deletion
rm $SERVER
rm $PAGES
rm $SERVER2
rm $API
rm ReadMe.md
rm -rf .git

# deletion finished

echo "All files have been deleted"
echo "Updating meteor"

meteor update

rm -rf .scripts
