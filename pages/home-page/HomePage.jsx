import { HomePageScrollWrapper, HomePageWrapper } from "./styledHomePage";
import Month from "../../components/month-text/Month";
import CategoryCard from "../../components/elements/category-card/CategoryCard";

const HomePage = ({active}) => {

    return(
        <HomePageWrapper
        active = {active}
        >
            <Month />
            <HomePageScrollWrapper
                contentContainerStyle={{ 
                    alignItems: 'center',
                    flexGrow: 1,
                    height: 1300
                }}
            >
                <CategoryCard
                    title='Food'
                    cardTotal='9999.99'
                />
                <CategoryCard 
                    title='Delivery'
                    cardTotal='9999.99'
                />
                <CategoryCard 
                    title='Smokes'
                    cardTotal='9999.99'
                />
                <CategoryCard 
                    title='Drinks'
                    cardTotal='9999.99'
                />
                <CategoryCard 
                    title='Electronics'
                    cardTotal='9999.99'
                />
                <CategoryCard 
                    title='Clothes'
                    cardTotal='9999.99'
                />
                <CategoryCard 
                    title='Games'
                    cardTotal='9999.99'
                />
                <CategoryCard 
                    title='Taxi'
                    cardTotal='9999.99'         
                />
                <CategoryCard 
                    title='Misc'
                    cardTotal='9999.99'
                />
            </HomePageScrollWrapper>
        </HomePageWrapper>
    )
}
export default HomePage;