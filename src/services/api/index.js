const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  product: {
    paginate: (limit = 10, offset = 1) => `${API}/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/api/${VERSION}/products/`,
    updateProducts: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProducts: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: `https://${API}/api/${VERSION}/users`,
    postUsers: `https://${API}/api/${VERSION}/users`,
    isAvailable: `${API}/api/${VERSION}/users/is-available/`,
    // getUsers: (limit = 10) => `https://${API}/api/${VERSION}/users?${limit}`,
  },
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  categories: {
    getCategoriesList: `${API}/api/${VERSION}/categories`,
    addCategory: `${API}/api/${VERSION}/categories`,
    getCategoryItem: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
    updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}/`,
  },
  files: {
    addImage: `${API}/api/${VERSION}/files/upload/`,
  },
};

export default endPoints;
