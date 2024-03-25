import {add} from '../controller/user_login_controller'

test('the function is imported',()=>
{
    expect(add(1,3)).toBe(4)
})