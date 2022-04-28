import React from 'react';
import { useGetMenu } from '../../utils/fetchers';

export function Menu() {
    const { data: menu, isLoading } = useGetMenu();

    if (isLoading || !menu) {
        return <div>Loading…</div>;
    }

    return (
        <div>
            { JSON.stringify(menu) }
        </div>
    );
}
