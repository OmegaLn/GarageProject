import  {  Module  }  de  '@ nestjs / common' ;
import  {  UsersModule  }  de  './users/users.module' ;
import  {  TypeOrmModule  }  depuis  '@ nestjs / typeorm' ;

@Module({
  importations : [
    TypeOrmModule . forRoot ( ) ,
    UtilisateursModule
  ],
})
export class AppModule {}