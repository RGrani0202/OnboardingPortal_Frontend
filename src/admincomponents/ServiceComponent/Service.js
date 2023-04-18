
class Service{
    constructor(httpClient){
        this.httpClient=httpClient;

        this.apikey-"process.env.REACT_APP_POST_USER_REGISTER;"

    }
     async getToDos(){
        try{
            const response = await this.httpClientpost(apikey, {
                userName: userName,
                email: email,
                password: newPassword,
                confirm_password: confirmpassword
                })

        } catch (err) { 
            console.log(err);
            }
     }
}
export default Service;