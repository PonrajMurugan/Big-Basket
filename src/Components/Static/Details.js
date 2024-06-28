import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import'./Details.css';


const data = [
  {
    id: 1,
    type: "fruit",
    card: [
      {
        id: 1,
        card_img: "https://www.bigbasket.com/media/uploads/p/m/30009286_8-fresho-blueberry.jpg?tr=w-1920,q=80",
        card_fresho: "Fresho",
        card_name: "Blueberry",
        card_kg: "120 g",
        card_discount: 2,
        card_price: 289
      },
      {
        id: 2,
        card_img: "https://www.bigbasket.com/media/uploads/p/m/10000267_24-fresho-orange-nagpur-regular.jpg?tr=w-1920,q=80",
        card_fresho: "Fresho",
        card_name: "Orange",
        card_kg: "500 g",
        card_discount: 15,
        card_price: 37.5
      },
      {
        id: 3,
        card_img: "https://www.bigbasket.com/media/uploads/p/m/40120006_6-fresho-pomegranate-small.jpg?tr=w-1920,q=80",
        card_fresho: "Fresho",
        card_name: "Pomegranate ",
        card_kg: "1 kg (5-6 pcs per kg)",
        card_discount: 5,
        card_price: 242.36
      },
      {
        id: 4,
        card_img: "https://www.bigbasket.com/media/uploads/p/m/10000005_27-fresho-apple-royal-gala-economy.jpg?tr=w-1920,q=80",
        card_fresho: "Fresho",
        card_name: "Apple",
        card_kg: "4 pcs Approx.450-500 g",
        card_discount: 8,
        card_price: 133.59
      },
      {
        id:5,
        card_img:"https://www.bigbasket.com/media/uploads/p/m/10000207_24-fresho-watermelon-small.jpg?tr=w-1920,q=80",
        card_fresho:"Fresho",
        card_name:"Watermelon",
        card_kg:"1pc-1.7-2.5 kg",
        card_discount:9,
        card_price:65.7
    },
    {
        id:6,
        card_img:"https://www.bigbasket.com/media/uploads/p/m/20000737_11-fresho-banana-raw-green.jpg?tr=w-1920,q=80",
        card_fresho:"Fresho",
        card_name:"Banana",
        card_kg:"1pc",
        card_discount:27,
        card_price:16.06
    }
    ]
  },
  {
    id: 2,
    type: "vegetable",
    card: [
      {
        id: 1,
        card_img: "https://www.bigbasket.com/media/uploads/p/m/40022639_5-fresho-cucumber-organically-grown.jpg?tr=w-1920,q=80",
        card_fresho: "Fresho",
        card_name: "Cucumber",
        card_kg: "500 g",
        card_discount: 15,
        card_price: 26.28
      },
      {
        id: 2,
        card_img: "https://www.bigbasket.com/media/uploads/p/m/10000204_16-fresho-tomato-local.jpg?tr=w-1920,q=80",
        card_fresho: "Fresho",
        card_name: "Tomato",
        card_kg: "500 g",
        card_discount: 2,
        card_price: 20
      },
      {
        id: 3,
        card_img: "https://www.bigbasket.com/media/uploads/p/m/10000159_27-fresho-potato.jpg?tr=w-1920,q=80",
        card_fresho: "Fresho",
        card_name: "Potato",
        card_kg: "1kg",
        card_discount: 15,
        card_price: 39
      },
      {
        id: 4,
        card_img: "https://www.bigbasket.com/media/uploads/p/m/10000104_17-fresho-curry-leaves.jpg?tr=w-1920,q=80",
        card_fresho: "Fresho",
        card_name: "Curry Leaves",
        card_kg: "100 g",
        card_discount: 11,
        card_price: 11.68
      },
      {
        id:5,
        card_img:"https://www.bigbasket.com/media/uploads/p/m/10000273_16-fresho-mushrooms-button.jpg?tr=w-1920,q=80",
        card_fresho:"Fresho",
        card_name:"Mushrooms",
        card_kg:"1pack Approx.180g-200g",
        card_discount:3,
        card_price:51.5
    },
    {
        id:6,
        card_img:"https://www.bigbasket.com/media/uploads/p/m/10000193_12-fresho-sweet-potato.jpg?tr=w-1920,q=80",
        card_fresho:"Fresho",
        card_name:"Sweet Potato",
        card_kg:"1 kg",
        card_discount:7,
        card_price:81.3
    }
    ]
  },
  {
    id: 3,
    type: "Cuts",
    card: [
        {
            id:1,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40110306_1-fresho-pea-eggplant-sundaikai.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"Pea Eggplant",
            card_kg:"100 g",
            card_discount:18,
            card_price:11.68  
        },
        {
            id:2,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40149660_3-fresho-capsicum-red.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"Capsicum-Red",
            card_kg:"2 pc",
            card_discount:25,
            card_price:55.48
        },{
            id:3,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/10000085_15-fresho-chinese-cabbage.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"Chinese Cabbage",
            card_kg:"500 g",
            card_discount:35,
            card_price:36.5
        },{
            id:4,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40005815_6-fresho-banana-blossom-peeled.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"Banana Blossom",
            card_kg:"1pc",
            card_discount:20,
            card_price:40.15
        },{
            id:5,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/10000693_11-fresho-sweet-corn-pellets.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"SweetCorn",
            card_kg:"250 g",
            card_discount:7,
            card_price:66.43
        },
        {
            id:6,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40211818_1-fresho-zucchini-yellow.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"Zucchini",
            card_kg:"2 pcs Approx(300-400g)",
            card_discount:10,
            card_price:67.16 
        }

    ]
  },
  {
    id: 4,
    type: "Herb",
    card: [
        {
            id:1,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/10000118_18-fresho-ginger.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"Ginger",
            card_kg:"250 g",
            card_discount:5,
            card_price:33.58
        },
        {
            id:2,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/10000097_19-fresho-coriander-leaves.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"Coriander Leaves",
            card_kg:"100 g",
            card_discount:8,
            card_price:12.41
        },
        {
            id:3,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/10000115_15-fresho-garlic.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"Garlic",
            card_kg:"250 g",
            card_discount:15,
            card_price:65
        },
        {
            id:4,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/10000337_13-fresho-chilli-bajji-mild.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"Chilli",
            card_kg:"1kg",
            card_discount:20,
            card_price:75.19
        },
        {
            id:5,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40300474_1-on1y-black-pepper-powder-no-added-colours-preservatives.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"Black Pepper",
            card_kg:"50 g",
            card_discount:30,
            card_price:139
        },
        {
            id:6,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/10000129_17-fresho-lemon-grass.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"Lemon Grass",
            card_kg:"100 g",
            card_discount:6,
            card_price:16.06
        }

    ]
},
{
    id: 5,
    type: "Health drink",
    card: [
        {
            id:1,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40019371_29-bournvita-chocolate-health-drink-bournvita.jpg?tr=w-1920,q=80",
            card_fresho:"Cadbury",
            card_name:"Bournvita Chocolate Health Drink",
            card_kg:"750 g pouch",
            card_discount:3,
            card_price:36.7
        },
        {
            id:2,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/253502_8-boost-nutrition-drink-health-energy-sports.jpg?tr=w-1920,q=80",
            card_fresho:"Boost",
            card_name:"Chocolate Energy & Sports Nutrition Drink Refill",
            card_kg:"750 g Carton",
            card_discount:5,
            card_price:164
        },
        {
            id:3,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/269603_10-complan-nutrition-health-drink-improves-concentration-memory-royale-chocolate-flavour.jpg?tr=w-1920,q=80",
            card_fresho:"Complan",
            card_name:"Royale Chocolate Nutritious Health Drink - Vitamin C & A",
            card_kg:"1kg-Carton",
            card_discount:15,
            card_price:491.18
        },
        {
            id:4,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40205328_10-horlicks-junior-health-drinkvanilla-specialized-nutrition-for-kids.jpg?tr=w-1920,q=80",
            card_fresho:"Horlicks",
            card_name:"Health & Nutrition Drink - Vanilla, Support Physical",
            card_kg:"400g pouch",
            card_discount:20,
            card_price:235
        },
        {
            id:5,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/20006249_4-boost-drink-powder-sports-stars-first-choice.jpg?tr=w-1920,q=80",
            card_fresho:"Boost",
            card_name:"Drink Powder - Sports Stars First Choice",
            card_kg:"15g",
            card_discount:8,
            card_price:5
        },
        {
            id:6,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40222427_2-chocolate-horlicks-health-nutrition-drink-chocolate.jpg?tr=w-1920,q=80",
            card_fresho:"Horlicks",
            card_name:"Health & Nutrition Drink - Chocolate",
            card_kg:"400g pouch",
            card_discount:30,
            card_price:840
        }

]
},
{
    id: 6,
    type: "Tea",
    card: [
        {
            id:1,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/281594_7-3-roses-natural-care-tea.jpg?tr=w-1920,q=80",
            card_fresho:"3 Roses",
            card_name:"Natural Care Tea",
            card_kg:"250 g",
            card_discount:5,
            card_price:240
        },
        {
            id:2,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40270718_1-emperia-green-tea-sampler-with-plain-tulsi-lemon-honey.jpg?tr=w-1920,q=80",
            card_fresho:"Emperia",
            card_name:"Green Tea - With Plain, Tulsi, Lemon & Honey",
            card_kg:"6.7 g(5 Tea Bags x1.34g Each)",
            card_discount:3,
            card_price:11.43
        },
        {
            id:3,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/20004597_11-tata-tea-gemini-tea.jpg?tr=w-1920,q=80",
            card_fresho:"Tata Tea",
            card_name:"Strong Assam Tea - Black Tea, Rich Aroma",
            card_kg:"100 g",
            card_discount:8,
            card_price:33.82
        },
        {
            id:4,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/263613_4-tata-tea-agni-leaf-tea.jpg?tr=w-1920,q=80",
            card_fresho:"Tata Tea",
            card_name:"Special Blend Tea - 10% Extra Strong Leaves",
            card_kg:"250 g- pack",
            card_discount:15,
            card_price:55
        },
        {
            id:5,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/60000304_3-avt-tea-premium.jpg?tr=w-1920,q=80",
            card_fresho:"AVT",
            card_name:"Premium CTC Dust Tea",
            card_kg:"500 g",
            card_discount:20,
            card_price:170
        },
        {
            id:6,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/137936_11-taj-mahal-tea.jpg?tr=w-1920,q=80",
            card_fresho:"Taj Mahal",
            card_name:"Tea",
            card_kg:"1 kg Carton",
            card_discount:30,
            card_price:705
        }

    ]
},
{
    id: 7,
    type: "Milk",
    card: [
        {
            id:1,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/30007714_8-cavins-milkshake-chocolate.jpg?tr=w-1920,q=80",
            card_fresho:"Cavins",
            card_name:"Chocolate Milkshake - With Zinc, Vitamin A & D Added",
            card_kg:"200 ml-Tetra pack",
            card_discount:8,
            card_price:33.6
        },
        {
            id:2,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40181675_5-amul-tru-apple.jpg?tr=w-1920,q=80",
            card_fresho:"Amul",
            card_name:"Tru Apple",
            card_kg:"150 ml-Tetra Pak",
            card_discount:5,
            card_price:10
        },
        {
            id:3,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40167931_3-cavins-gulkand-milkshake.jpg?tr=w-1920,q=80",
            card_fresho:"Cavins",
            card_name:"Gulkand Milkshake - With Zinc, Vitamin A & D Added",
            card_kg:"180 ml",
            card_discount:2,
            card_price:52.8
        },
        {
            id:4,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/1202881_6-hersheys-milk-shake-chocolate.jpg?tr=w-1920,q=80",
            card_fresho:"Hersheys",
            card_name:"Chocolate Flavor Milkshake",
            card_kg:"3X180 ml-Multipack",
            card_discount:15,
            card_price:100.32
        },
        {
            id:5,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/1223943_1-hersheys-milkshake-chocolate-2x180-ml-cookies-creme-2x180-ml-strawberry-2x180-ml.jpg?tr=w-1920,q=80",
            card_fresho:"Hersheys",
            card_name:"Milkshake - Chocolate 2x180 ml + Cookies",
            card_kg:"Combo-3 items",
            card_discount:11,
            card_price:200.64
        },
        {
            id:6,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/1213744_1-sunfeast-chocolate-shake-with-real-belgian-chocolate.jpg?tr=w-1920,q=80",
            card_fresho:"Sunfeast",
            card_name:"Dark Fantasy Belgian Chocolate Shake",
            card_kg:"3X180 ml-Multipack",
            card_discount:30,
            card_price:87.05
        }

    ]
}  ,
{
    id: 8,
    type: "Drinks",
    card: [

        {
            id:1,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/251023_11-coca-cola-soft-drink-original-taste.jpg?tr=w-1920,q=80",
            card_fresho:"Coca Cola",
            card_name:"Soft Drink",
            card_kg:"750 ml-petbottle",
            card_discount:5,
            card_price:32
        },
        {
            id:2,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/274035_8-frooti-drink-fresh-n-juicy-mango.jpg?tr=w-1920,q=80",
            card_fresho:"Frooti",
            card_name:"Drink - Fresh 'N' Juicy Mango",
            card_kg:"125 ml-Tetra",
            card_discount:15,
            card_price:10
        },
        {
            id:3,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/265695_19-maaza-mango-drink.jpg?tr=w-1920,q=80",
            card_fresho:"Maaza",
            card_name:"Mango Drink - Original Flavour, Refreshing",
            card_kg:"1.2 l-pet Bottle",
            card_discount:6,
            card_price:69
        },
        {
            id:4,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/100012278_12-red-bull-energy-drink.jpg?tr=w-1920,q=80",
            card_fresho:"RED BULL",
            card_name:"Energy Drink",
            card_kg:"250 ml Can",
            card_discount:20,
            card_price:125
        },
        {
            id:5,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/100012281_10-red-bull-energy-drink.jpg?tr=w-1920,q=80",
            card_fresho:"RED BULL",
            card_name:"Energy Drink",
            card_kg:"250 ml(Pack of 4)",
            card_discount:30,
            card_price:480
        },
        {
            id:6,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40170924_7-real-fruit-power-juice-masala-mixed-fruit.jpg?tr=w-1920,q=80",
            card_fresho:"Real",
            card_name:"Fruit Power Juice - Masala Mixed Fruit",
            card_kg:"1 litre",
            card_discount:15,
            card_price:70
        }
    ]
} ,
{
    id: 9,
    type: "Chai-Snack",
    card: [
        {
            id:1,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40016990_3-mccain-french-fries.jpg?tr=w-1920,q=80",
            card_fresho:"McCain",
            card_name:"French - Fries",
            card_kg:"1.25 kg",
            card_discount:15,
            card_price:280
        },
        {
            id:2,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40282384_2-aashirvaad-malabar-paratha-ready-to-cook-frozen-no-added-preservatives.jpg?tr=w-1920,q=80",
            card_fresho:"Aashirvaad",
            card_name:"Malabar Paratha - Ready To Cook, No Added",
            card_kg:"400g (5pcs)",
            card_discount:8,
            card_price:135
        },
        {
            id:3,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40119532_4-amul-happy-treats-french-fries.jpg?tr=w-1920,q=80",
            card_fresho:"Amul",
            card_name:"Happy Treats French Fries 6 Mm - Ready To Cook",
            card_kg:"2.5 kg",
            card_discount:10,
            card_price:380
        },
        {
            id:4,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40115858_11-tasties-namkeen-moong-dal.jpg?tr=w-1920,q=80",
            card_fresho:"Tasties",
            card_name:"Moong Dal",
            card_kg:"30g",
            card_discount:2,
            card_price:13
        },{
            id:5,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/282598_5-mccain-smiles-crispy-happy-potato.jpg?tr=w-1920,q=80",
            card_fresho:"McCain",
            card_name:"Smiles - Crispy Happy Potato",
            card_kg:"175 g pouch",
            card_discount:20,
            card_price:280
        },
        {
            id:6,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40004575_8-sumeru-masala-french-fries-piri-piri.jpg?tr=w-1920,q=80",
            card_fresho:"sumeru",
            card_name:"Masala French Fries - Piri Piri",
            card_kg:"200 g",
            card_discount:30,
            card_price:79
        }     

    ]
},
{
    id: 10,
    type: "Morning-Snack",
    card: [
        {
            id:1,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/271205_16-id-fresho-idly-dosa-batter.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"Idly & Dosa Batter",
            card_kg:"1kg",
            card_discount:30,
            card_price:84.15
        },
        {
            id:2,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40015688_24-kelloggs-corn-flakes.jpg?tr=w-1920,q=80",
            card_fresho:"Kelloggs",
            card_name:"Corn Flakes - Original, High In Iron & B Group Vitamins",
            card_kg:"900 g",
            card_discount:20,
            card_price:320
        },
        {
            id:3,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40017896_7-kelloggs-chocos.jpg?tr=w-1920,q=80",
            card_fresho:"Kelloggs",
            card_name:"Chocos - With Protein & Fibre Of 1 Roti In Each Bowl",
            card_kg:"23 g",
            card_discount:15,
            card_price:10
        },
        {
            id:4,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40283412_1-fresho-tender-coconut-water-with-pulpy-malai.jpg?tr=w-1920,q=80",
            card_fresho:"Fresho",
            card_name:"Tender Coconut Water With Pulpy Malai",
            card_kg:"200 ml",
            card_discount:5,
            card_price:35
        },
        {
            id:5,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40114334_6-kelloggs-chocos-fills-double-chocolaty.jpg?tr=w-1920,q=80",
            card_fresho:"Kelloggs",
            card_name:"Chocos Fills",
            card_kg:"250 g",
            card_discount:7,
            card_price:185
        },
        {
            id:6,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40285036_4-muscleblaze-high-protein-oats-with-probiotics-fibre-rich-improves-gut-health-dark-chocolate-flavour.jpg?tr=w-1920,q=80",
            card_fresho:"MuscleBlaze",
            card_name:"17 g High Protein Oats - With Probiotics, Dark",
            card_kg:"1 kg",
            card_discount:3,
            card_price:649
        }

    ]
},
{
    id: 11,
    type: "Pasta",
    card: [
        {
            id:1,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40225057_4-aashirvaad-vermicelli-made-from-high-quality-wheat-non-sticky.jpg?tr=w-1920,q=80",
            card_fresho:"Aashirvaad",
            card_name:"Vermicelli - Made From Wheat",
            card_kg:"150 g",
            card_discount:11,
            card_price:16.15
        },
        {
            id:2,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40118708_2-nissin-cup-noodles-seafood.jpg?tr=w-1920,q=80",
            card_fresho:"Nissin",
            card_name:"Rich Seafood Curry Instant Cup Noodles",
            card_kg:"70 g",
            card_discount:2,
            card_price:46
        },
        {
            id:3,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/1202657_6-sunfeast-yippee-mood-masala-noodles-family-pack.jpg?tr=w-1920,q=80",
            card_fresho:"Sunfeast",
            card_name:"YiPPee! Mood Masala Instant Noodles",
            card_kg:"2x260 g-(pack of 2)",
            card_discount:8,
            card_price:91.2
        },
        {
            id:4,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40125873_8-maggi-2-minute-noodles-masala.jpg?tr=w-1920,q=80",
            card_fresho:"MAGGI",
            card_name:"2-Min Masala Instant Noodles",
            card_kg:"840 g-(12 pack x 70g)",
            card_discount:15,
            card_price:158
        },
        {
            id:5,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/40268405_1-keya-spirali-fusilli-wheat-semolina-pasta-rich-in-protein-cholesterol-free.jpg?tr=w-1920,q=80",
            card_fresho:"Keya",
            card_name:"Spirali Fusilli Wheat Semolina Pasta - Rich In",
            card_kg:"1kg pouch",
            card_discount:20,
            card_price:270
        },
        {
            id:6,
            card_img:"https://www.bigbasket.com/media/uploads/p/m/101065_6-barilla-basilico-pasta-pizza-sauce-with-no-added-preservatives-gluten-free.jpg?tr=w-1920,q=80",
            card_fresho:"Barilla",
            card_name:"Basilico Pasta & Pizza Sauce - With No Added",
            card_kg:"400 g jar",
            card_discount:30,
            card_price:499
        }

    ]
},
{
    id: 12,
    type: "Sweets",
    card: [
        {
            "id":1,
            "card_img":"https://www.bigbasket.com/media/uploads/p/m/40310090_2-lavian-exotique-creme-cups-choco-flavoured-cupcake-with-delicious-creamy-center.jpg?tr=w-1920,q=80",
            "card_fresho":"Lavian Exotique",
            "card_name":"Crème Cups - Choco Flavoured Cupcake",
            "card_kg":"20 g",
            "card_discount":3,
            "card_price":15 
        },
        {
            "id":2,
            "card_img":"https://www.bigbasket.com/media/uploads/p/m/40304855_1-sundrop-duo-cruncheez-multigrain-centre-50-lower-sugar.jpg?tr=w-1920,q=80",
            "card_fresho":"Sundrop",
            "card_name":"Duo Cruncheez - Multigrain Centre, 50% Lower Sugar",
            "card_kg":"70 g-pouch",
            "card_discount":8,
            "card_price":30
        },
        {
            "id":3,
            "card_img":"https://www.bigbasket.com/media/uploads/p/m/40019375_17-cadbury-perk-chocolate-home-treats.jpg?tr=w-1920,q=80",
            "card_fresho":"Cadbury",
            "card_name":"Chocolate Coated Wafer Home Treats",
            "card_kg":"126 g-(21pcs x 6g each)",
            "card_discount":11,
            "card_price":89.1 
        },
        {
            "id":4,
            "card_img":"https://www.bigbasket.com/media/uploads/p/m/100265004_16-cadbury-dairy-milk-silk-fruit-nut-chocolate-bar.jpg?tr=w-1920,q=80",
            "card_fresho":"Cadbury",
            "card_name":"Fruit & Nut Chocolate Bar",
            "card_kg":"137",
            "card_discount":15,
            "card_price":185 
        },
        {
            "id":5,
            "card_img":"https://www.bigbasket.com/media/uploads/p/m/1207407_9-cadbury-dairy-milk-silk-valentine-home-treats-hearts-roses.jpg?tr=w-1920,q=80",
            "card_fresho":"Cadbury",
            "card_name":"Minis Chocolate Home Treats Pack",
            "card_kg":"2 x 153g-Multipack",
            "card_discount":26,
            "card_price":372.02
        },
        {
            "id":6,
            "card_img":"https://www.bigbasket.com/media/uploads/p/m/100306865_8-cadbury-gems-sugar-coated-chocolate.jpg?tr=w-1920,q=80",
            "card_fresho":"Cadbury",
            "card_name":"Chocolate",
            "card_kg":"25.28 g",
            "card_discount":30,
            "card_price":20
        }

    ]
}
]


const Details = () => {
  const { id } = useParams();
  const item = data.find(d => d.id.toString() === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className=''>
    <h1 style={{ fontSize:"1rem" , fontWeight:"700" , marginLeft:"335px" , marginTop:"20px" }}>Fresho! {item.type}</h1> 
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className='filter' style={{ width: '15%' , marginLeft:"100px" }}>
      <h6 style={{fontSize:"1.3rem" , fontWeight:"700" , marginLeft:"20px", marginTop:"20px"}} >Shop By Category</h6>
        <h6>Price</h6>
        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          Less Than Rs-20
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          Less Than Rs-50
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          Less Than Rs-100
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          Less Than Rs-200
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          Less Than Rs-500
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          Less Than Rs-1000
        </label><br />

        <h6>Discounts</h6>
        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          10% or more
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          20% or more
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          30% or more
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          40% or more
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          50% or more
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          60% or more
        </label><br />

        <h6>Country Of Origin</h6>
        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          India
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          USA
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          China
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          Germany
        </label><br />

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' style={{ marginRight: '10px' }} />
          Australia
        </label><br />
      </div>

      <div className='cards' style={{ display: 'flex', flexWrap: 'wrap', width: '78%'  }}>
        {item.card.map(card => (
        <div key={card.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '25%' }}>
            <img src={card.card_img} alt={card.card_name} style={{ width: '80%', height:"30vh", paddingLeft:"50px" }} />
            <p style={{fontSize:"0.8rem", color:"grey"}}>{card.card_fresho}</p>
            <h2  style={{fontSize:"1rem" , fontWeight:"600"}}>{card.card_name}</h2>
            
            <p style={{fontSize:"0.8rem", color:"grey"}}>{card.card_kg}</p>
            <p style={{fontSize:"0.8rem", color:"grey"}}>Discount: {card.card_discount}%</p>
            <p style={{fontSize:"1rem" , fontWeight:"600"}}>Price: ₹{card.card_price}</p>

        <div> 
            
        <i class="bi bi-bookmark saveico"></i>

         <Button 
             variant="outline-danger" className="btn-cart">
             Add
         </Button>   

        </div>

        </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Details;
