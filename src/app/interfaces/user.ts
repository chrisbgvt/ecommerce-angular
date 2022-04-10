export interface IUser {
    email: string,
    username: string,
    password: string,
    name:{
        firstname: string,
        lastname: string
    },
    address:{
        city: string,
        street: string,
        number:3,
        zipcode: string,
        geolocation:{
            lat: string,
            long: string
        }
    },
    phone: string
  }