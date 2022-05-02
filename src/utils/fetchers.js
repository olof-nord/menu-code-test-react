import { useQuery } from 'react-query';
import { gql, request } from 'graphql-request';

const BACKEND_GRAPHQL = process.env.BACKEND_GRAPHQL || 'http://localhost:3000/graphql';

export function useGetStarters() {
    return useQuery('starters', async () => {
        const { menu } = await request(
            BACKEND_GRAPHQL,
            gql`
                query Starters {
                  menu {
                    starters {
                      id
                      name
                      price
                    }
                  }
                }
              `
        );
        return menu;
    });
}

export function useGetMains() {
    return useQuery('mains', async () => {
        const { menu } = await request(
            BACKEND_GRAPHQL,
            gql`
                query Mains {
                  menu {
                    mains {
                      id
                      name
                      price
                    }
                  }
                }
              `
        );
        return menu;
    });
}

export function useGetDesserts() {
    return useQuery('desserts', async () => {
        const { menu } = await request(
            BACKEND_GRAPHQL,
            gql`
                query Desserts {
                  menu {
                    desserts {
                      id
                      name
                      price
                    }
                  }
                }
              `
        );
        return menu;
    });
}

export function useGetMenu() {
    return useQuery('menu', async () => {
        const { menu }  = await request(
            BACKEND_GRAPHQL,
            gql`
                query Menu {
                  menu {
                    starters {
                      id
                      name
                      price
                    }
                    mains {
                      id
                      name
                      price
                    }
                    desserts {
                      id
                      name
                      price
                    }
                  }
                }
              `
        );
        return menu;
    });
}