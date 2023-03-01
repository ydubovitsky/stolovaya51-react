import { ReactComponent as BreakfastSvg } from "./breakfast-svgrepo-com.svg";
import { ReactComponent as ChefSvg } from "./chef-svgrepo-com.svg";
import { ReactComponent as CoffeeSvg } from "./coffee-love-svgrepo-com.svg";
import { ReactComponent as FastfoodSvg } from "./fastfood-svgrepo-com.svg";
import { ReactComponent as ServedSvg } from "./served-plate-svgrepo-com.svg";
import { ReactComponent as VegetablesSvg } from "./vegetables-svgrepo-com.svg";

interface FeatureInterface {
  name: string;
  description: string;
}

let featuresMap = new Map<FeatureInterface, any>();

featuresMap.set(
  {
    name: "Завтраки",
    description:
      "Подаем вкусные завтраки каждый день: по будням с 8:00 до 10:00",
  },
  <BreakfastSvg />
);
featuresMap.set(
  {
    name: "Еда из под ножа",
    description: "Готовим на месте! Всегда можно вкусно и быстро поесть!",
  },
  <ChefSvg />
);
featuresMap.set(
  {
    name: "Бизнес-ланчи",
    description: "Удобная еда в обеденное время для занятых людей",
  },
  <FastfoodSvg />
);
featuresMap.set(
  {
    name: "Только свежие продукты",
    description:
      "Для приготовления вкусной и здоровой еды мы используем только самые лучшие и самые свежие продукты",
  },
  <VegetablesSvg />
);
featuresMap.set(
  { name: "Кофе с собой", description: "Кофе С Собой + выпечка" },
  <CoffeeSvg />
);
featuresMap.set(
  { name: "Еда с собой", description: "Закажите и заберите готовую еду в нашей или вашей посуде" },
  <ServedSvg />
);

export default featuresMap;
