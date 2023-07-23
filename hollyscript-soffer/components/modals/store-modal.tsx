"use client"

import { Modal} from "@/components/ui/modal";
import {useStoreModal} from "@/hooks/use-store-modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();
    return(
        <Modal
            title={"creat store"}
            description={"add a new store to manage prodacte and ece"}
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}>
            Future Create Store Form
        </Modal>
    );

};