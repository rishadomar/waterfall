import React, { ReactElement } from 'react';
import { View } from 'react-native';

type GridProps = {
    data: any[];
    numColumns: number;
    renderComponent: (dataItem: any) => ReactElement;
};

const Grid = ({ data, numColumns, renderComponent }: GridProps) => {
    const rows = Math.ceil(data.length / numColumns);

    const renderRow = (rowIndex: number) => {
        const items: any[] = [];
        for (let i = 0; i < numColumns; i++) {
            const index = rowIndex * numColumns + i;
            if (index < data.length) {
                items.push(<View key={data[index].id}>{renderComponent(data[index])}</View>);
            }
        }
        return (
            <View key={rowIndex} style={{ flexDirection: 'row' }}>
                {items}
            </View>
        );
    };

    const rowsArray = [];
    for (let i = 0; i < rows; i++) {
        rowsArray.push(renderRow(i));
    }

    return <View>{rowsArray}</View>;
};

export default Grid;
