// import { 
//     Bin,
//     Checkmark,
//     Dot,
//     Filter,
//     Locked,
//     Moon,
//     Pencil,
//     Refresh,
//     Search,
//     Sun,
//     VArrow,
//     XLarge,
//     XMedium
// } from "../../index";

import { ReactComponent as Abort  } from '../../../assets/icons/abort.svg';
import { ReactComponent as Bin  } from '../../../assets/icons/bin.svg'
import { ReactComponent as Checkmark  } from '../../../assets/icons/checkmark.svg'
import { ReactComponent as Dot  } from '../../../assets/icons/dot.svg'
import { ReactComponent as Filter  } from '../../../assets/icons/filter.svg'
import { ReactComponent as Locked  } from '../../../assets/icons/locked.svg'
import { ReactComponent as Moon  } from '../../../assets/icons/moon.svg'
import { ReactComponent as Pencil  } from '../../../assets/icons/pencil.svg'
import { ReactComponent as Refresh  } from '../../../assets/icons/refresh.svg'
import { ReactComponent as Search  } from '../../../assets/icons/search.svg'
import { ReactComponent as Sun  } from '../../../assets/icons/sun.svg'
import { ReactComponent as VArrow  } from '../../../assets/icons/v_arrow.svg'
import { ReactComponent as XLarge  } from '../../../assets/icons/x-large.svg'
import { ReactComponent as XMedium  } from '../../../assets/icons/x-medium.svg'

export const ICON_NAME = {
    Abort: 'Abort',
    Bin: 'Bin',
    Checkmark: 'Checkmark',
    Dot: 'Dot',
    Filter: 'Filter',
    Locked: 'Locked',
    Moon: 'Moon',
    Pencil: 'Pencil',
    Refresh: 'Refresh',
    Search: 'Search',
    Sun: 'Sun',
    VArrow: 'VArrow',
    XLarge: 'XLarge',
    XMedium: 'XMedium'
}

export const SvgIcons = ({ icon, color }) => {
    switch (icon) {
        case 'Abort': return <Abort style={{stroke: color, fill: color}} /> ;
        
        case 'Bin': return <Bin style={{stroke: color, fill: color}} /> ;
        
        case 'Checkmark': return <Checkmark style={{stroke: color, fill: color}} /> ;
        
        case 'Dot': return <Dot style={{stroke: color, fill: color}} /> ;
        
        case 'Filter': return <Filter style={{stroke: color, fill: color}} /> ;
        
        case 'Locked': return <Locked style={{stroke: color, fill: color}} /> ;
        
        case 'Moon': return <Moon style={{stroke: color, fill: color}} /> ;
        
        case 'Pencil': return <Pencil style={{stroke: color, fill: color}} /> ;
        
        case 'Refresh': return <Refresh style={{stroke: color, fill: color}} /> ;
        
        case 'Search': return <Search style={{stroke: color, fill: color}} /> ;
        
        case 'Sun': return <Sun style={{stroke: color, fill: color}}/> ;
        
        case 'VArrow': return  <VArrow  style={{stroke: color, fill: color}} /> ;
        
        case 'XLarge': return <XLarge style={{stroke: color, fill: color}} /> ;
        
        case 'XMedium': return <XMedium style={{stroke: color, fill: color}} /> ;
        
        default: <></>;
    }
}