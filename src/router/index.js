import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "home",
    component: resolve => {
      require(["../views/Home"], resolve);
    },
    children: [
      {
        path: "/",
        component: resolve => {
          require(["../views/ui/home/HomeOptions"], resolve);
        }
      },
      {
        path: "/categories",
        component: resolve => {
          require(["../views/ui/category/Categories"], resolve);
        }
      },
      {
        path: "/category/:id",
        component: resolve => {
          require(["../views/ui/category/Category"], resolve);
        },
        props: true
      },
      {
        path: "/products",
        component: resolve => {
          require(["../views/ui/products/Products"], resolve);
        }
      },
      {
        path: "/product/:id",
        component: resolve => {
          require(["../views/ui/products/Product"], resolve);
        },
        props: true
      },
      {
        path: "/about",
        component: resolve => {
          require(["../views/ui/about/About"], resolve);
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
