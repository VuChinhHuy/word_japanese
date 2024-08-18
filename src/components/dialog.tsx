import BackgroundDialog from "./background_dialog"

interface IDialog {
    open: boolean
}
export function Dialog (props: IDialog){
    const {open} = props
    return <>
        {open && <BackgroundDialog/>}
    </>
}