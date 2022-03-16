var e = {
  "aliyun:global": {
    url: "//cloud.feitsui.com/ping"
  },
  "aliyun:intl": {
    url: "//tb.cloudping.cloud/cloudping.cloud"
  },
  upyun: {
    url: "//mars.feitsui.com/ping.html"
  },
  qiniu: {
    url: "http://qn.feitsui.com/ping.html"
  },
  "tencent:global": {
    url: "http://tx.feitsui.com/ping.html"
  },
  "tencent:intl": {
    url: "//tx.cloudping.cloud/cloudping.cloud"
  },
  "huawei:global": {
    url: "http://hw.feitsui.com/cloudping.cloud"
  },
  "huawei:intl": {
    url: "http://hw.cloudping.cloud/cloudping.cloud"
  },
  "bce:cdn": {
    url: "//feitsui-beijing.cdn.bcebos.com/ping.html"
  },
  "azure:akm": {
    url: "//akm.feitsui.com/cloudping.cloud"
  },
  "azure:ms": {
    url: "//ms.feitsui.com/cloudping.cloud"
  },
  "azure:vrz": {
    url: "//vrz.feitsui.com/cloudping.cloud"
  },
  "aws:cloudfront": {
    url: "//cf.feitsui.com/cloudping.cloud"
  },
  "cdn:jsdelivr": {
    url: "https://cdn.jsdelivr.net/gh/ft6/feitsui.com/ping.txt"
  },
  "aws:cn-north-1": {
    url: "//ec2.cn-north-1.amazonaws.com.cn/ping",
    fixed: !0
  },
  "aws:cn-northwest-1": {
    url: "//ec2.cn-northwest-1.amazonaws.com.cn/ping",
    fixed: !0
  },
  "azure:southeast-asia": {
    url: "//feitsui-s3.azurewebsites.net/cloudping.cloud"
  }
}
  , t = {
    "cn-beijing": "bjs",
    "cn-guangzhou": "can",
    "cn-hangzhou": "hgh",
    "cn-heyuan": "heyuan",
    "cn-huhehaote": "het",
    "cn-qingdao": "tao",
    "cn-shanghai": "sha",
    "cn-shenzhen": "szx",
    "cn-wulanchabu": "ucb",
    "cn-zhangjiakou": "zqz",
    "cn-chengdu": "ctu",
    "cn-hongkong": "hkg",
    "ap-northeast-1": "nrt",
    "ap-south-1": "bom",
    "ap-southeast-1": "sin",
    "ap-southeast-2": "syd",
    "ap-southeast-3": "kul",
    "ap-southeast-5": "cgk",
    "ap-southeast-6": "mnl",
    "eu-central-1": "fra",
    "eu-west-1": "lhr",
    "me-east-1": "dxb",
    "us-east-1": "virginia",
    "us-west-1": "silicon-valley"
  }
  , n = {
    bd: "baoding",
    bj: "beijing",
    gz: "guangzhou",
    fsh: "shanghai",
    su: "suzhou",
    fwh: "wuhan",
    hkg: "hkg",
    sin: "sin"
  }
  , a = {
    "cn-north-1": "pek1",
    "cn-north-4": "pek4",
    "cn-north-9": "ucb",
    "cn-south-1": "can",
    "cn-southwest-2": "kwe1",
    "cn-east-2": "sha2",
    "cn-east-3": "sha1",
    "ap-southeast-1": "hkg",
    "ap-southeast-2": "bkk",
    "ap-southeast-3": "sin",
    "na-mexico-1": "mex1",
    "la-south-2": "scl",
    "sa-brazil-1": "gru1",
    "af-south-1": "jnb"
  }
  , s = {
    "ap-beijing": "bjs",
    "ap-chengdu": "ctu",
    "ap-chongqing": "ckg",
    "ap-guangzhou": "can",
    "ap-nanjing": "nkg",
    "ap-shanghai": "sha",
    "ap-beijing-fsi": "bjs-fsi",
    "ap-shanghai-fsi": "sha-fsi",
    "ap-shenzhen-fsi": "szx-fsi",
    "ap-hongkong": "hkg",
    "ap-bangkok": "bkk",
    "ap-jakarta": "cgk",
    "ap-mumbai": "bom",
    "ap-seoul": "icn",
    "ap-singapore": "sin",
    "ap-tokyo": "nrt",
    "eu-frankfurt": "fra",
    "eu-moscow": "mow",
    "na-ashburn": "iad",
    "na-siliconvalley": "siliconvalley",
    "na-toronto": "yto"
  }
  , o = {
    "cn-bj": "bjs",
    "cn-gd": "can",
    "cn-sh2": "sha2",
    hk: "hk",
    "tw-tp": "tpe",
    "afr-nigeria": "los",
    "bra-saopaulo": "gru",
    "ge-fra": "fra",
    "idn-jakarta": "cgk",
    "ind-mumbai": "bom",
    "kr-seoul": "icn",
    sg: "sg",
    "uae-dubai": "dxb",
    "us-ca": "lax",
    "us-ws": "us-ws",
    "vn-sng": "sgn"
  }
  , c = ["af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3", "ap-southeast-1", "ap-southeast-2", "ap-southeast-3", "ap-southeast-4", "ap-south-1", "ap-south-2", "ca-central-1", "eu-central-1", "eu-central-2", "eu-north-1", "eu-south-1", "eu-south-2", "eu-west-1", "eu-west-2", "eu-west-3", "me-central-1", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-west-1", "us-west-2"]
  , r = ["ap-northeast-1", "ap-northeast-2", "ap-southeast-1", "ap-southeast-2", "ap-south-1", "ca-central-1", "eu-central-1", "eu-west-1", "eu-west-2", "eu-west-3", "us-east-1", "us-east-2", "us-west-2"]
  , u = {
    "east-asia": "speedtestea",
    "japan-east": "speedtestjpe",
    "japan-west": "speedtestjpw",
    "korea-central": "speedtestkoreacentral",
    "korea-south": "speedtestkoreasouth",
    "australia-east": "speedtestoze",
    "australia-southeast": "speedtestozse",
    "central-india": "speedtestcentralindia",
    "south-india": "speedtesteastindia",
    "west-india": "speedtestwestindia",
    "north-europe": "speedtestne",
    "west-europe": "speedtestwe",
    "france-central": "speedtestfrc",
    "france-south": "speedtestfrs",
    "uk-south": "speedtestuks",
    "uk-west": "speedtestukw",
    "west-us": "speedtestwus",
    "west-us-2": "speedtestwestus2",
    "west-central-us": "speedtestwestcentralus",
    "south-central-us": "speedtestscus",
    "central-us": "speedtestcus",
    "north-central-us": "speedtestnsus",
    "east-us": "speedtesteus",
    "east-us-2": "speedtesteus2",
    "canada-central": "speedtestcac",
    "canada-east": "speedtestcae",
    "uae-north": "speedtestuaen",
    "south-africa-north": "speedtestsan",
    "brazil-south": "speedtestbs3",
    "germany-north": "speedtestden",
    "germany-west-central": "speedtestgwc",
    "australia-central": "feitsuiaucentral",
    "switzerland-north": "speedtestchn",
    "switzerland-west": "speedtestchw",
    "norway-east": "speedtestnea",
    "norway-west": "speedtestnow"
  }
  , l = ["nyc1", "nyc2", "nyc3", "ams2", "ams3", "sfo1", "sfo2", "sfo3", "sgp1", "lon1", "fra1", "tor1", "blr1"]
  , h = {
    "asia-east1": "",
    "asia-east2": "",
    "asia-northeast1": "",
    "asia-northeast2": "",
    "asia-northeast3": "",
    "asia-south1": "",
    "asia-southeast1": "",
    "asia-southeast2": "",
    "australia-southeast1": "",
    "europe-north1": "",
    "europe-west1": "",
    "europe-west2": "",
    "europe-west3": "",
    "europe-west4": "",
    "europe-west6": "",
    global: "",
    "northamerica-northeast1": "",
    "southamerica-east1": "",
    "us-central1": "",
    "us-east1": "",
    "us-east4": "",
    "us-west1": "",
    "us-west2": "us-west2-a",
    "us-west3": "",
    "us-west4": ""
  }
  , d = ["newark", "atlanta", "dallas", "fremont", "toronto1", "frankfurt", "london", "singapore", "tokyo2", "mumbai1", "syd1"]
  , p = ["ap-tokyo-1", "ap-seoul-1", "ap-sydney-1", "ap-mumbai-1", "us-phoenix-1", "us-ashburn-1", "ca-toronto-1", "uk-london-1", "eu-frankfurt-1", "eu-zurich-1", "sa-saopaulo-1"]
  , g = ["syd-au", "tor-ca", "fra-de", "par-fr", "lon-gb", "hnd-jp", "sel-kor", "ams-nl", "sgp", "lax-ca-us", "sjo-ca-us", "fl-us", "ga-us", "il-us", "nj-us", "tx-us", "wa-us"];
for (var key in t)
  e["aliyun:" + key] = {
    url: "//feitsui-" + t[key] + ".oss-" + key + ".aliyuncs.com/ping.html"
  };
for (var key in n)
  e["bce:" + key] = {
    url: "//feitsui-" + n[key] + "." + key + ".bcebos.com/ping.html"
  };
for (var key in a)
  e["huawei:" + key] = {
    url: "//feitsui-" + a[key] + ".obs." + key + ".myhuaweicloud.com/ping.html"
  };
for (var key in s)
  e["tencent:" + key] = {
    url: "//feitsui-" + s[key] + "-1251417183.cos." + key + ".myqcloud.com/ping.html"
  };
for (var key in o)
  e["ucloud:" + key] = {
    url: "//feitsui-" + o[key] + "." + key + ".ufileos.com/ping.html"
  };
for (var i = 0; i < c.length; i++)
  e["aws:" + c[i]] = {
    url: "//ec2." + c[i] + ".amazonaws.com/ping",
    fixed: !0
  };
for (var i = 0; i < r.length; i++)
  e["lightsail:" + r[i]] = {
    url: "//lightsail." + r[i] + ".amazonaws.com/ping",
    fixed: !0
  };
for (var key in u)
  e["azure:" + key] = {
    url: "//" + u[key] + ".blob.core.windows.net/cb.json"
  };
for (var i = 0; i < l.length; i++)
  e["digitalocean:" + l[i]] = {
    url: "http://speedtest-" + l[i] + ".digitalocean.com/test_checksums.txt"
  };
for (var key in h) {
  var m = h[key] || key;
  e["gcp:" + key] = {
    url: "//" + m + "-gce.cloudharmony.net/probe/ping.js"
  }
}
for (var i = 0; i < d.length; i++)
  e["linode:" + d[i]] = {
    url: "http://speedtest." + d[i] + ".linode.com/empty.php"
  };
for (var i = 0; i < p.length; i++)
  e["oracle:" + p[i]] = {
    url: "https://objectstorage." + p[i] + ".oraclecloud.com/n/nrxhlhablb3f/b/feitsui.com/o/ping.html"
  };
for (var i = 0; i < g.length; i++)
  e["vultr:" + g[i]] = {
    url: "//" + g[i] + "-ping.vultr.com/robots.txt"
  };

export default e;
