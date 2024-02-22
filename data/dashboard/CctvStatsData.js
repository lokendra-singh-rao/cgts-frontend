import {
    ListTask,
    People,
    Bullseye,
    Camera2
} from 'react-bootstrap-icons';

export const CctvStats = [
    {
       id:1,
       title : "Registered CCTVs",
       value : 234,
       icon: <ListTask size={18}/>,
      //  statInfo: '<span className="text-dark me-2">2</span> Completed' 
    },
    {
        id:2,
        title : "Active CCTVs",
        value : 225,
        icon: <Camera2 size={18}/>,
      //   statInfo: '<span className="text-dark me-2">28</span> Completed' 
     },
     {
        id:3,
        title : "Shutdown CCTVs",
        value : 9,
        icon: <Bullseye size={18}/>,
      //   statInfo: '<span className="text-dark me-2">1</span> Completed' 
     },
     {
        id:4,
        title : "Admins Registered",
        value : '3',
        icon: <People size={18}/>,
      //   statInfo: '<span className="text-dark me-2">5%</span> Completed' 
     }
];
export default CctvStats;
