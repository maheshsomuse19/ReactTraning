const path=require('path');

module.exports={
    mode:"production",
    entry:'./src/App.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"output.js"
    },
    devServer:{
        contentBase:path.join
    }
}