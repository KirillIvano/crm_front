import {useCallback, useState} from 'react';

export const useModalState = (initial = true) => {
    const [visible, setVisible] = useState(initial);

    const open = useCallback(() => setVisible(true), [setVisible]);
    const close = useCallback(() => setVisible(false), [setVisible]);
    const toggle = useCallback(() => setVisible(x => !x), [setVisible]);

    return {open, close, toggle, visible};
};
