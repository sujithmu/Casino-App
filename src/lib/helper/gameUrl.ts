const gameUrl = (gameName: string) => {
    switch (gameName) {
      case "feastingfox":
        return "https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/feastingfox/index.html?moneymode=fun";
      case "bookofinferno94":
        return "https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/bookofinferno/index.html?moneymode=fun";
      case "warpwreckers":
        return "https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/warpwreckers/index.html?moneymode=fun";
      case "renosevens":
        return "https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/renosevens/index.html?moneymode=fun";
      case "scattermonsters":
        return "https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/scattermonsters/index.html?moneymode=fun";
      default:
        break;
    }
  };
  
  export default gameUrl;
  