const truncate = (string:string,num:number) => {
    return string?.length > 150 ? string.substr(0, num) + "......" : string;
  };
  export default truncate
  