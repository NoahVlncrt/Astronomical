#!/bin/sh
echo "Cleaning up uneeded files!"


# start deletion

rm readme.md
rm -rf .git

# deletion finished

echo "All files have been deleted"
echo "Updating meteor"

meteor update

rm -rf .scripts
