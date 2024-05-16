import { useEffect, useState } from 'react';
import { CardPhone } from './CardPhone';
import { getPhones } from '../../services/getPhones';

export const CardsPhones = () => {
    const [phones, setPhones] = useState([]);
    const [phonesFilter, setPhonesFilter] = useState([])
    const filterButtons = document.querySelectorAll('.filter-button')
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    useEffect(() => {
        getPhones("src/assets/mocks/mock-smartphones.json").then(phones => setPhones(phones))
    }, []);
    
    const phonesBrandApple = phones.filter((phone)=> phone.brand === "APPLE")
    const phonesBrandXiaomi = phones.filter((phone)=> phone.brand === "XIAOMI")
    const phonesBrandMotorola = phones.filter((phone)=> phone.brand === "MOTOROLA")
    const phonesBrandSamsung = phones.filter((phone)=> phone.brand === "SAMSUNG")
    const phonesRam2gb = phones.filter((phone)=> phone.ram === "2GB")
    const phonesRam4gb = phones.filter((phone)=> phone.ram === "4GB")
    const phonesRam8gb = phones.filter((phone)=> phone.ram === "8GB") 
    const phonesRom64gb = phones.filter((phone)=> phone.rom === "64GB")
    const phonesRom128gb = phones.filter((phone)=> phone.rom === "128GB")
    const phonesRom256gb = phones.filter((phone)=> phone.rom === "256GB")

    const showAll = () => setPhonesFilter(phones)
    const changeTo2gb = ()=>setPhonesFilter(phonesRam2gb)
    const changeTo4gb = ()=>setPhonesFilter(phonesRam4gb)
    const changeTo8gb = ()=> setPhonesFilter(phonesRam8gb)
    const changeToBrandApple = () => setPhonesFilter(phonesBrandApple)
    const changeToBrandXiaomi = () => setPhonesFilter(phonesBrandXiaomi)
    const changeToBrandMotorola = () => setPhonesFilter(phonesBrandMotorola)
    const changeToBrandSamsung = () => setPhonesFilter(phonesBrandSamsung)
    const changeToStorage64gb = () => setPhonesFilter(phonesRom64gb)
    const changeToStorage128gb = () => setPhonesFilter(phonesRom128gb)
    const changeToStorage256gb = ()=> setPhonesFilter(phonesRom256gb)
    
    return (
        <div className='content-phones'>
            <aside className='filter-bar'>
                    <button className='filter-button' onClick={showAll} >All</button>
                    <button className='filter-button' onClick={changeToBrandApple}>Apple</button>
                    <button className='filter-button' onClick={changeToBrandXiaomi}>Xiaomi</button>
                    <button className='filter-button' onClick={changeToBrandMotorola}>Motorola</button>
                    <button className='filter-button' onClick={changeToBrandSamsung}>Samsung</button>
                    <button className='filter-button' onClick={changeTo2gb} >2GB</button>
                    <button className='filter-button' onClick={changeTo4gb}>4GB</button>
                    <button className='filter-button' onClick={changeTo8gb}>8GB</button>
                    <button className='filter-button' onClick={changeToStorage64gb}>64GB</button>
                    <button className='filter-button' onClick={changeToStorage128gb}>128GB</button>
                    <button className='filter-button' onClick={changeToStorage256gb}>256GB</button>
                

            </aside>
            <main className='phones-cards'>
            {phonesFilter.map((phone) => (
                    
                    <CardPhone 
                        key={phone.id}
                        idPhone={phone.id}
                        name={phone?.name}
                        brand={phone?.brand}
                        ram={phone.ram}
                        rom={phone.rom}
                        price={phone.price}
                        img={phone.image}
                    />
            ))}
            </main>
                
        </div>
    );
};
