import { RouteProps } from 'react-router-dom';
import { GenerationPassword } from '../../../pages/GenerationPassword';
import { NotFoundPage } from '../../../pages/NotFoundPage';

export enum AppRoutes {
    GENERATION = 'generation',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.GENERATION]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.GENERATION]: {
        path: RoutePath.generation,
        element: <GenerationPassword />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
