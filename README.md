# Drops 8 - Open Social #

Note: The repo exposes the composer.json file as well as the /vendor directory of your project. To convert to a nested docroot project, follow the following steps here:

https://pantheon.io/docs/nested-docroot/

You need to modify the /web/autoload.php file to reference the vendor folder relative to the current Web docroot

After converting, make sure to run a `composer update` to re-commit









