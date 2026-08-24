const jwt = require('jsonwebtoken');



class AuthService {
    async login({email,password}){
        const user = await prisma.user.findUnique({
            where: { email: email.toLowerCase() },
        });
    }
}