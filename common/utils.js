// make a new user from the form data
export function makeUser(formData){

    const user = {
        name: formData.get('name'),
        type: formData.get('type'),
        energy: 50,
        money: 50,
        completed: {}
    };
    return user;

}