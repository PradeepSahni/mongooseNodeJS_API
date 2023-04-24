npm i mongoose
npm i mongoosejs-cli
# To create  Folder  Stucture 
npx mongoose-cli  init
npx mongoosejs-cli model:create --name User --attributes name:String,email:String,password:String,state:Boolean,birth:Date,card:Number

# before  use  Model Index
  do not  skip to remove Default Export it should be module.export  only 
  