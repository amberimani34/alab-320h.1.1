import Header from './Header';
import EmployeeListItem from './EmployeeListItem';

function EmployeePage () {
    return (
        <>
        <div className='Employee'>
        <Header style={{border: '2px solid rgb(9, 172, 236)', textAlign: 'center', marginTop: '0', marginBottom: '20px', fontSize: '16px', paddingTop: '8px', paddingBottom: '8px', color: 'black'}} whichHeader='Employee'/>
        <div className='EmployeeList'>
        <EmployeeListItem style={{height: '15vh'}}  name='Julie Taylor' title='VP of Marketing' img='https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <div className='Details'>
        <h5>Call Office</h5>
        <h6>781-000-0002</h6>
        </div>
        <div className='Details'>
        <h5>Call Mobile</h5>
        <h6>617-000-0002</h6>
        </div>
        <div className='Details'>
        <h5>SMS</h5>
        <h6>617-000-0002</h6>
        </div>
        <div className='Details'>
        <h5>Email</h5>
        <h6>jtaylor@fakemail.com</h6>
        </div>
        </div>

        </div>
        </>
    )
}

export default EmployeePage