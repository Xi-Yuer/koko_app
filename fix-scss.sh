echo "---===installation dependency===---"
yarn add --dev sass-migrator patch-package postinstall-postinstall

echo "use sass-migrator to fix problems"
./node_modules/.bin/sass-migrator division ./node_modules/taro-ui/dist/style/components/*.scss

echo "---===use patch-package to save this edit===---"
./node_modules/.bin/patch-package taro-ui

echo "---===use postinstall-postinstall to automatic operation in the future===---"
hasPostinstall=$(grep '"postinstall":' package.json)
if [[ "$hasPostinstall" != "" ]];then
    echo "Make sure your package.json has following [script:{\"postinstall\": \"patch-package\", ...]"
else
    scriptLine=$(grep -n '"scripts": {' package.json  | cut -d : -f 1)
    newScript=$(sed "${scriptLine}a\    \"postinstall\": \"patch-package\"," package.json)
    echo "$newScript" > package.json
    echo "done!"
fi
