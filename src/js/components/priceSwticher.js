export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="swticher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const entriesPrice = document.querySelector('[data-price="enterprise"]');
  const PriceDate = document.querySelectorAll('[price-date="data"]');
  const priceList = {

    
    month_year:{
      month:"/mo",
      year:"/yr",
    },

    starter: {
      default:   "$"+100,
      witchSale: "$"+80,
    },
    popular: {
      default:   "$"+1400,
      witchSale: "$"+1120,
    },
    enterprise: {
      default:   "$"+2100,
      wtichSale: "$"+1680,
    },
  };

  const setPricesWitchSale = () => {
    starterPrice.textContent = priceList.starter.witchSale;
    popularPrice.textContent = priceList.popular.witchSale;
    entriesPrice.textContent = priceList.enterprise.wtichSale;

    PriceDate.forEach(el => {
      el.textContent = priceList.month_year.year
    });
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    entriesPrice.textContent = priceList.enterprise.default;

    PriceDate.forEach(el => {
      el.textContent = priceList.month_year.month
    });
  };

  switcher.checked = true;
  setPricesWitchSale();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesWitchSale();
    } else {
      setDefaultPrices();
    }
  });
};