// Import dependencies
const decompress = require("decompress");
const path = require("path");

(async () =>{
    try{
        const files = await decompress("unicorn.zip", "dist",{
            filter: file => {
                path.extname(file.path) !== ".exe";
                path.extname(file.path) === ".Zip";
            }
        });
        console.log("done! ");
    }catch(error){
        console.log(error);
    }
})();

decompress("unicorn.zip", "dist").then(files => {
    console.log("done! ");
});