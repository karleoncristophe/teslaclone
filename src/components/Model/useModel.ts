import { useContext, useEffect, useCallback } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName: string) {
    const {registerModel, unregisterdModel, getModelByName} = useContext(ModelsContext)

    useEffect(() => () => unregisterdModel(modelName), [
        modelName,
        unregisterdModel
    ])

    const getModel = useCallback(() => getModelByName(modelName), [
        getModelByName,
        modelName
    ])

    return { registerModel, getModel}
}

