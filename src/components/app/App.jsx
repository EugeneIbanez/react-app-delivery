import { Layout } from "../layout/Layout";
import { RestaurantList } from "../restaurants/RestaurantList";
import { ThemeContextProvider } from "../theme-context/theme-context";

export const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <RestaurantList />
      </Layout>
    </ThemeContextProvider>
  );
};
