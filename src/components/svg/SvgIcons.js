import { 
    Abort,
    Bin,
    Checkmark,
    Dot,
    Filter,
    Locked,
    Moon,
    Pencil,
    Refresh,
    Search,
    Sun,
    VArrow,
    XLarge,
    XMedium
} from "../index"

export const SvgIcons = ({ icon, color }) => {
    switch (icon) {
        case 'Abort': return <Abort color={color} />;
        
        case 'Bin': return <Bin color={color} />;
        
        case 'Checkmark': return <Checkmark color={color} />;
        
        case 'Dot': return <Dot color={color} />;
        
        case 'Filter': return <Filter color={color} />;
        
        case 'Locked': return <Locked color={color} />;
        
        case 'Moon': return <Moon color={color} />;
        
        case 'Pencil': return <Pencil color={color} />;
        
        case 'Refresh': return <Refresh color={color} />;
        
        case 'Search': return <Search color={color} />;
        
        case 'Sun': return <Sun color={color} />;
        
        case 'VArrow': return <VArrow color={color} />;
        
        case 'XLarge': return <XLarge color={color} />;
        
        case 'XMedium': return <XMedium color={color} />;
        
        default: <></>;
    }
}