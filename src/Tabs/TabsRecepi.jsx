import React, { useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useData from '../CustomHook/useData';
import TabsCard from '../Components/Card/TabsCard/TabsCard';
import { useParams } from 'react-router-dom';

const TabsRecepi = () => {

    const [data, loading] = useData()
    const { category } = useParams()
    console.log(category);
    const categoryes = ['salad', 'pizza', 'soup', 'dessert', 'drinks',]
    const intialIndex = categoryes.indexOf(category)

    const [tabIndex, setTabIndex] = useState(intialIndex)




    const populars = data.filter(popularRecepi => popularRecepi.category === 'popular')
    const desserts = data.filter(popularRecepi => popularRecepi.category === 'dessert')
    const pizzas = data.filter(popularRecepi => popularRecepi.category === 'pizza')
    const salads = data.filter(popularRecepi => popularRecepi.category === 'salad')
    const soups = data.filter(popularRecepi => popularRecepi.category === 'soup')
    const drinks = data.filter(popularRecepi => popularRecepi.category === 'drinks')

    return (
        <div className='text-center]'>

              <Tabs className='mt-16' defaultIndex={tabIndex} onSelect={(index)=>{
                    setTabIndex(index)}}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERT</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            salads.map(item => <TabsCard key={item._id} item={item}></TabsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            pizzas.map(item => <TabsCard key={item._id} item={item}></TabsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            soups.map(item => <TabsCard key={item._id} item={item}></TabsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            desserts.map(item => <TabsCard key={item._id} item={item}></TabsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            drinks.map(item => <TabsCard key={item._id} item={item}></TabsCard>)
                        }
                    </div>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default TabsRecepi;