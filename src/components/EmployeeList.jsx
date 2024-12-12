import EmployeeListItem from './EmployeeListItem';

function EmployeeList () {
    return (
        <>
        <div className='empList'>
        <EmployeeListItem style={{color: 'black', border: '2px solid red', marginBottom: '1px', height: '14.5vh'}} name='James King' title='President and CEO' img='https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=400' />
        <EmployeeListItem style={{color: 'black', border: '2px solid red', marginBottom: '1px', height: '14.5vh'}} name='Julie Taylor' title='VP of Marketing' img='https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg' />
        <EmployeeListItem style={{color: 'black', border: '2px solid red', marginBottom: '1px', height: '14.5vh'}} name='Eugene Lee' title='CFO' img='https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&w=600' />
        <EmployeeListItem style={{color: 'black', border: '2px solid red', marginBottom: '1px', height: '14.5vh'}} name='John Williams' title='VP of Engineering' img='https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=400' />
        <EmployeeListItem style={{color: 'black', border: '2px solid red', marginBottom: '1px', height: '14.5vh'}} name='Ray Moore' title='VP of Sales' img='https://images.pexels.com/photos/3760376/pexels-photo-3760376.jpeg?auto=compress&cs=tinysrgb&w=600' />
        <EmployeeListItem style={{color: 'black', border: '2px solid red', height: '14.5vh'}} name='Paul Jones' title='QA Manager' img='https://images.pexels.com/photos/2422289/pexels-photo-2422289.jpeg?auto=compress&cs=tinysrgb&w=400' />
        </div>
        </>
    )
}

export default EmployeeList;