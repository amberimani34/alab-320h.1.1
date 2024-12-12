import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';
import '../styles.css';

function HomePage () {
    return (
        <>
        <div className='Homepage'>
        <Header style={{border: '2px solid rgb(9, 172, 236)', textAlign: 'center', marginTop: '0', marginBottom: '0', fontSize: '16px', paddingTop: '8px', paddingBottom: '8px', color: 'black'}} whichHeader='Employee Directory'/>
        <SearchBar style={{border: '2px solid limegreen'}} />
        <EmployeeList />
         </div>
        </>
    )
}

export default HomePage;