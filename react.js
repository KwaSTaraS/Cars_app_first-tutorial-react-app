function Car(props) {
    const classes = ['card']
    if(props.car.marked) {
        classes.push('marked')
    }
    return (
        <div className={classes.join(' ')} onClick={props.onMark}>
            <div className="card-img">
                <img
                    src={props.car.img}
                    alt={props.car.name}/>
            </div>
            <h3>{props.car.name}</h3>
            <p>{props.car.price} $</p>
        </div>
    )
}

class App extends React.Component {
    state = {
        cars: [
            {marked: false, name: 'BMW M2 Coupe', price: 20000, img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg'},
            {marked: false, name: 'Audi TT', price: 15000, img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598'},
            {marked: false, name: 'Rolls Royce', price: 50000, img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgaGhwYHBwcHBwcHBoaGBoaGhgcGhoeIS4lHCErIRgZJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQhISQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EAEgQAAIBAgMDCAYGBwcEAwEAAAECEQADBBIhBTFBBiJRYXGBkaETMrHB0fAUQlJikuEHFnKCotLxIzNDc5OywhUkU4NFlOI0/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIxEBAQEBAAICAgIDAQAAAAAAAAECESExAxJBUQQTImFxkf/aAAwDAQACEQMRAD8AzS4mGKSzIYjeOadeE5jw8dKku4i2JGVoIjM0TIEmQdx6O2nIAuqrlI4tDHjqqyNfGOFV2PvKIB1Mg7zvA/rvr5s5a694MW7KNDiAQNOB4ZukS2+Yplq4GkkZgvTpoYO9Z651oa66qpVQDmYES0lNDJg9JA8N1JgnlwAGUaj6zaa7tZ8OmtfVqVrbVu2EzhZ5usTKmOJmSe3ooXEFGILW+iZExI3ROpge3pp1vFJlyD7pIJy6Ac0nfIjt30LjMSVMACIiZnwHRXDWeXw7XXIPSzZgSxBPrFiIBY6EiJIG/jQ9nFK7eiVlO/WIgD6xndpwGvsoO1iiqNKIZ3u2p6gsajr1plu6chYk253ZZGed8c2AO/upM9c/sId5DW2YjXeoXWNRMmfZUKYNklIEyGMMIE67uJofCo+pIyrMZzngzrBK79OrtqbENnZOcWy6QBAAO7SZntrrnPLz8J1c4Yu4hYYjSUIHtGvdUWJwRAOVgD86E7hTcAHQQpM9en9atrOGhS2knU9BPTWNePTpzwzqYFUAd4LcBOg7/fVoFRgGC6dckHxMntofFW0mXPdTbN8sWZVOUaSeasdu+pr7XzSZsMxlh7jASFUcQKhurkhE1btknwqDam0Gbmo0dJ/OpNm3gqFgZbp6O+uuMcnamrJ6EHOqhoct9mQAJ6ZgedQhwy5neDwB3+I+NVt+86yxca9poK7jWbQMB4D86434tS3n5cvtRxsa70XoGaWPdvpbaXCx1JHXu8ONAWbhDDXXqA95q1su7HVHPcPhU1mw9pbDOkwwAPzw+NDYhtc2aSfn51p1y4s5QjZt2vw1qDa9s2lGYgk6RM99TObqkB4nEgalpbr1PsNRYAkvn5un2tffAoQ2ywJke+rHY2D3Zhp2T7fhXrzM5iTPldXdvsy5QgMbyAPaQazOLxknVQAe2POtViFXLDGB0LE+4DwqnxCYZdSuvex8YArlPrnXr/xvlVKqjDj4/D40xQFO4x89dTHE2Aeavj/U03Oj6+A/M128/wC+JeGviV4RSW7qzwHdUN3DtOgWO2aOwOEZtAJPUK3zk8ElF2cSoG8z1D41LbhuJ7TJ8hRNrYLtEmBWg2fsK2oGYT2/GvNrXl1zjVUdu2i7xPdH50bYvqdAkDsAHiZq8vYOwg9VfCfbQLYhR6gVe4+4VZPsuuZAYnDFtyDzP5VQ4+0U/IVf43EGPXPcPiZrNY8SdST2z8a9OM8jjb1WXsW26ofSt0Hxoj0YnWmkCt8jFtat7KMFVbgIAgiMoMkgacOPuoHHYa2irmc5gdOAOsHqG7pofGbQOgOZY9UMBB6NI3az5azTcNbuXD6rsg4BDHVrAAPwrz5zfyn/ABPaXMJGUQRzWO/TRmHHfw6d9dh7ZBGadeHTJ4d4G7oqW1ZzNnbMZkAkwCxB7dfjQWPZg4SDI0AmYg6bgK1M+Wp4XWOsujo4GhX6pB3ac4E61PicOznWWO+PVgncN9dg7alka40+jUAlhIZhuUdMsZHfU72y3OWWDTA4yTEab/nfWdSx0nkEyOihXCiDzVkHj9aN40ozC2sTinm3azwRJCQgIEan1RHbV7sPkvmbPcUOw4Noi8YYj1zHRoNJDA1rsJYJEZ3CrzVCEoum+FQhQNw0A1BrePg75rldfpkrHITEkhoRNNQbhJJO8woIFWCchbvFrS/iPYd2/vrTXcW6Ye4ymXWNTrEvkk9JyjN1k1QHG3WUFr1zX7LZP9sV3nw5T70/9R3Mf26iOhG/motuSJPrX+H2P/1VU7A+sXb9p2b2mmNk+wp7qv8ATn9H31+02I5AW2POxHkB/wAqlfkgmTIuJUaRMD+aq5z9nKOor76YivJ3ERwMQfwmaX4c33D76/Ye7+jViITFoO1Af+dc/wCjrEZQEu2mA6ypPZzSBSXLlxGAKFh9wTI7Y0PdRi23k+pHCdSO3mir/XlPtpV4jkHjBMIjDoDgk97KKz93kpiLTZrli4g6SAyj95SVFeg4d1AGZVJ6RI9lHWr2mj3F7HcgdxJFYvwyrNV55ZQKNFl43zMeVA29pOmYGOua0m2cPftuzuqXbTSc6IqXE/bygI8dJGv2hWa2ngzGcNnQ/WEgCdwdd6N1HfrBMV5tfFceb5jp95VHi8YGeQzHWdNKvmuo9sBySRwPT3/CqfMiCY17qP2PtVw0+ilOk8PAVjXbP8Z4ie6S0qEaCe74ACp8Nin3CAOqrTH7SDiFQa74PuqlZxw0PYK5Y3brzONTwlv3CeIPZNVuIsBt7ED54UTfvOo5vsHvqrIZzziT3ge+vVIddawqk5VBbrJ08KubWzVUSdT2Cl2bhUTeCOuZrS4W2kSAT1muG/k7fbrjHhQYfZTsdZC8AAB4nQ1ZIfReqJPTvPtqTHY9QYWO/XymoMNtEzunsyj3VjW9Xw1Prm+BFraTn6nflJoh9oNlkyO6l+n9IUd5Jqpx+0CdBHcorMzqrdcgTH7UJJ5x7hQ9nHRuEn72vtoO6Cx1B7qMw9iBOVya9fxzk9PPq9Lfxd4jTQdS/CqjE5xvPjFWeKuwOI7TVLcvgmu7HQzma7J20QCvXXACiNhgghIzI46QVLCDvgncd2pFaHZmHtlBzWVQN0EFSdDq3hMVlMNsS5o155C/VklZGuuvR1catxfFlOaATAEqNSPVUSZLEmdK8U5m+L1vMsnla7SuIgBtKinUSZLjQR6MGRx1J3DrrN7R2erMrEHOQVLEwAOmYHO1iaL2bimdWbcZgHTTdv6Pypq7Pe5dzQxUOJJAiAJ3jTUk7p3Vcb1defHCzsdnDgDMDLZ5AhQQNMp0O4d+atRsTAc0MeIGUHTKp5o1H2iGAPBVc6Eqap1tqpe4+iqGZwNJGbmr1TCjThrwqz5G4v0l1muEc3nxoAbjc1AB0IiwP2RXq+OfbXfwzq8nGwuWmS3lRGOkCF38Tu0E++nW7ZQBSCIHERJ4nvMmpziAftH978qrNubXSwEZ84UsVn1oMTu7jXock18ZrOKHHI8dqoGX21nMM0oOokeZI9taPY+KS47gGVdEYaRzXBGs7pAHlWOwOIyAo+/QE8Ay81gejUVqA0KDvJpl5VXiZ4Cm5j1VBduTvIqqU3qZ9I3xTCgO4+VMOFc7gT3H4UUQlxjUq3WimWLTqNbbk6bkY1KiP/4r3+m/woBFxZ91E4bG6xQd3Zt5mLC24kkwVYe6nLsrEf8AjfwqC4TGDcfD4GqnFbFAzPhm1M5rbAZWB3jojqIints7Eb/RvU1rD3x/huCNxifGoMjc2IHuAIoR5ANpzCkkxKO24T9UnsJ9UaC9gcZh0l8NbZFEkoQ+g4wGkeFGYzAG6P7S26t9oKSOqeml2NygvWnNjEI7oDC3cjNp16SR59EjQcPk/j537WasZ5dqpdOVrBHZnHsNC7Q2fbHOBy9WjHwmatNqbceyzI9sQCcucnVZ5pGsHSNZrMYrlHccxkQL91R7TNfOz8e/t65J/tu676OXCI3147R8BUuGwKgg58wHUR7qjwt8H6o8R7wKNfEADVo6hl/OvTu/4tZizsXkQaIvbE0Jjce781QR3H3VVri0n1m7/wAqsbONThM99eTHx8813+/Zz0gsbPnVv9skeNGwqroxPcPdTC7v6oaO00dhbCqJuAeE/Gums6s8E5/xWYnaOQQCO3L+VUeMx7N9c+EVoNr4rDgaZp7IHsrLXGZm5okdc10xLzyxvk9VGMTl1zx3U/8A6g8aOW7qnGzrhElQO4/CnLsdj/Q11l45ctU+Jvud9AkEmtDf2Mw+qaBbBsv1TXXO4xc0FZQzxq8w+DJE5T4fnTdmISfVB7h761+Gtc0c0fw/Cr78nONI+xkYQzkiZ0Ed2+h25K2SAoe4o3DnKIhsw0IPGfGi0c9NNuMZ31qfHmeol1arEtYe07+jcucxzEkFQTviAKTCO7lFQc8ySE6dxJPcNar8TgnR2dDKnhEkdPbWm5E4X+zNwj1jv6lJAXxB8q8s+K63y+G/tyCcPycVky3XGpzMAGPOkZSDpEQeH1monBcj8KhlXcN05jrPU2lG3n0IWAYIBIkAxoSAQSJ4TVUb+KRwrLZdZ9ZGZBEwNGz68Y8TXszJmcjlbb5q5fk8oByXroMaRkI6t6UPd2Kl21bTE/V157GS0Eb1YdPT3U5iCaIW+27MSOvUedaZP2dsRbTh7biIAI1MgCAJLGI08KKxGybTtme0hJ1nKDPbprUVvHcGUR1b6NRwRKtp88DQCJsewN1pB+4nwqZcCg3QO4Cp/SEdB8jTluKdNx6D7juNVUH0brpDY7aKNvoqJmYflr+dQDlB9k02B9mjUM66R0g0uWgAIH2aTL90VYd1JmFBX68NPH40hRunxFWWldlHRQVJtfdHdoaaU63Hb8atyo6BQ74m0NC6T0Zlnw30FY2CB4A0Bd2VYZsj2kJK5hzQeMEnTdv47+2r1ricM/cjn2LQrqQc4LmAZLoRzZkiTlgCBr1azUFFd5K4Zv8ACUfsyvsIqtxnIW285HdT1ww9x862yOWEhGI7U/nrmzDfbf8AgPsas3Ob7i/bTy+/yDurqvon7SwJ7isDxqFNj4i1q2GMDioVx/BMV6Ze2jZQw75T0EGfIGo/p9g6rdQHhLBZ6udFY/py1N6jzJ9oKJGXKd2kfDShGxAO4nvNeu4jZ9q+o9JbR9PrAFh2NvHcazW1eQVtgTYcofsPz17j6w75qX47J4dP7e+3nl4AfVBPd8ajRzwUjsy07bWzruHfJcQAxIg6MOlTxoSyDMlfOvJrN7etTUXmBXpznw+NWLYlEHqfPjVRh8Wi79PH403FbQQiA48/jXKTVamoLvbZTdlqnx+KzagGgMTeX7QoF8R1ivR8eLGNaH4FyGnXwrW4PFpkG7wNZLZl9ZAOvjWpw+JtBQNfD8q9OfTm0+QjiadAIgtUzqKFuW66smvZjiT31Byf2+5xrYWP7NbSxp6rQrsSevNH7vWafBFZ3Azbxl2+2gW7bXiOayAT1wJ8TSJXpTGmzrM6RERxk6zUjiKjqoUNUitUEUomiJ/SUZs26ASCwExAJjXqqsZhGunT1dNee4z9IhF4qlpGsgxJJDuOLA7h1Ag0HsrGoHuL0g+dVHJ7aqYm0ro2ZSJWd+mhVh9pTpReIaT1CqC7GKg5ZJB3aEkH3ipkxQacstBgwCYI3g9BqpTQg9BFVPKuwqst4qCp5j6CelSDBjiJ7BUVqbjN6yghusGG6m08946xoVXF6SQR1EQR215ycXayEqhDAzIYZY0EREnUjjxqTCYwPA9KyRMw5GnAgFhPR4aU5R6Aceg3sviKQ7RT7afiHxrEYu6UaExNx1gGc9xdZII0boAPfQjbRvLGW/dJiYF124ngSegU5R6F9LQ7mB7CKHvXyXRMxCtmGhgkhcwGYagQGOkHQVQYnCpddLzorFlhpUHVIGvXBj9yrNLCJlZURSroZCqCASFbUD7JNT8H5WP0RN5TN1vLn8TyaecWib2VR1sAPbXkV2yzmHd2d0xKSzMSLtt0QNv35mcjsHRTbli2wZgiwbeHvDT6npHZx3paA/ePTWW3qd/lLhknNeTT7Jz/AO2apcfy7tkMiKGUgrLPB1BB5on21i0tItwcxdL/ADtBoLlpr790lB2aVFaRVtKWUErh5bQa/RTnf+Nx4VeDQvy0K23Av2gxZY1BZVOadCSBrl/FWbxO0RcPPxA0zb3diMolgBu0Gp6Ko9tWovXFgEMtxT1n0Fu8sf8AsBNQI83FaNGuYdz2X7ZF095304nV5efDkc28S2gkqSCXEqNFnUajfNAW8rEA30UMQAQHk5pygEoBrB48DVdh2gIxGqrZc/tWrzWf9pqc4UBSg1CgoJ3zaxYE/gujwNOHXrGx9sraw1pbjnMVKrClmuZOIA+7lOsHWg73LQMpa2haCRDslo83KTAYtOjCNxND3UuvYQ4dVzhlbKTAFt7eQg6jSUGhoXaHJ3G4iHcW3bTmKeaBrBz+qI00zE6QOIKFP20r4nAHEPo6XFMaEIrKodR0gMd/3Kwgukb2PdEV6xhtkG3gblh2UuyMIUkheaxGpA1lvKvJVtM2tef58+ZW8fmB8W4PFj4VWXD1eyrq5hiOPz30BctSY+FYxqRdZV8dnhTghq2s4BTvYijDs5CIDrPWK3fln4WYA7MUz6oPXMVf20Mep/EaGw2CKiFKns/pVkiOBGvl8K3n0xY163Ipx1qGZpVYiuzJjCs9tZ4N1YksbaASAZOTUdMBnrS5wd++s9j7IOLQNMO0acIQEGO1aT2VsNiY9b9lHB1KAkcQQIbzmj8leY8kdqEMbU6EB01ggiAwB6YykR0NW8we2ODjN1iAw7RuPlWmFiUoTaisbN0L6xtuB2lDHnR9m6j+owPVuI7Qda65boMzypx+TAO4aGdFQGeLgbu6a8w2JhLZOe9rbU5QuYLnaJ1YkQB0cewGtr+knm4a0gmBdUdy23Amqvk5gf7PPqCoAWN4J57kHhJOU/sCorTcmLqWbqra0tXJKgCMtxRqCOBIkHsWtu1eW2cWTLD1lYN23EhlbtKhgen0YO816XhrwdFYbiAR2ESPIiqh7VPeRXQq4DKw1H58D10OTUiPpUFTc5K2CZD3l7GQjzST30Ra2BaGrQ5+/bQz+ELVjnpC9FCtsPDn/Ds9yOPY9MTk/ZUyqqJ4K11PGHM+FG+kpPS0OmHZwCIiBVCsW9ctMhxGq6atO/hUYBh0O+CPEUQLwqO83PVu74e2nB5vexAS8DwTFOCOn0tq5e8CzL4CgrQ/s1t7/wDt79gn7yMlpf8An4mpNtNku34+o9l+r10tt/Cn8VCW8SA6ngL9wdvpLdy6PN18BWetCr+JzFmG5jh7oPSty4LZ/gTzNSWwDCn6z4i2Oy+5uEfhUVTrdK2x0rYI/wDrgx5sfGireJhp+zeRu5sME0/ebzp0AbSu5r1p+Fw2W/dc3UJ8MvlVYt0hFPEWUbvt4jL5LRWO5gXptgJ3WbqAebmh725ljcMSncpDj21RPfP94u6PpSDsRkuiirp5zEcWv+N3DpdXzWhGlmOnrMR/rYbX2CpsI5JSYgthySTuBsNbcnwFB6dyRxEAf5ajX7jOv/KtDcxBO81ltiKFe2UYMlyy7Kdx/vLbajeCM5GvQah5QcrBYYoiB2BhmZ1RFaAcuY6swBGgHHfM1J6S+2jd9fKvF8U5VmXcAxHgYrabLxeMu3bdy6WWyXVYVMiEk6euQ7jhujUdcYvHJmvXBm/xHG/75rn8s8RrFcbpIAzCkVV4jXtrvoh0509/9aMt4VgN47xXD6x1hcMFO7NRZtJvPn/SnYfDsBMA9lSyNx0Ph7YpMtdS4C4imfhVzbxaR+X5VVWcEG1DHxmiBhyNJ8q7TLnaNTERUxxEiqxmqdK7OZ5xVA4zEQwvE6WwSezJcAjvZR30S61V7UwAuKVJZesewjiOqrEYr6SyMrKYZMsHoIAn3itVsblbmIW8uo+svV4kfxDqFVN3ky8znnuod9hEfWNDj1HC4lXAZGDDeCN/aIPsmrbD7QbcTmHXv8fjXjOEe7h2zW2I4kHVT2r79/XWv2TyvR4W8Mjbs080/vfzfiq9Tgr9KC5sMjDhdE9Uo49sVHgEy2AR1k9hMg+dHcqU9Lg7mU5soD6fcIYyOGgPuoDYmIKW7rdFgle0gD4UgrSwV3hgQYYRwIEsD1wD41v+SWJz4ZQfqyvgdP4Stee7MwKmybjMc7OSRwytmQd4jzFaj9H+KlHToIbxlf8AgKDZMaq+UmKZMLedDlcI2U9BiAR0b6sC1UvK5/8As7/+WfaKiMfhMLjmVbiJfZWUMMuN4EdDbqnI2gPqY4fs3rb+ZHuo3kJtQGzkJ1tk9fMckg9xLDuFa9HzaiCOBBmfhVVgTjNoAf8AyK/+m1c9wp1vbWPG84sx9rBr7iK3h7KQmgy+zuVd8OqXbNxlMc/0D24Y6Qw1jhztRrw31r3eVBgjUaMII4e+h/SRSPd08OPXRGexexrjvfBIFu44YEZSwylZEEaarvB4cZqD9VJJOY6uG3hdVQINytwFaRLu/tPxpHvc1u+NfmKz9Wus4eSKmczaZXX+8nS4QW/wuqpV5M2RvdZJ+0x1GoGkTEVZYt+Y+/1W9hrGYfAOqgBADK6IhVSDhL8OfvFnKk/dXppw7V43J/CshcvbKLJYrnCjUOcx9KRoQDwpqbLwLLmDqykM0rlYEMwVtdTq0A61DaIa1eKIVBNvKhARmyKmeEaOg799CYzCX7z2nAyhXZmHMXmelTKGAYicmc7zu6TFOHatMBhMC7MqKWKnXMiqNJQwcihogrpMVbWNnWB6qREfWaN0CADA00ql2PadHdnyrq+WGDE57r3JIiBo4HHjVvbvggxqOsfGgMt4e2hzKihojMAJjonfQ2H2dYRi6WkVySxbKC5JMk52lpnrqHE41UWXdVA1JYgARv31lNp8uFWVsjMeDHd3D+tEanamNAu4dC0vcvLoTrlQMxPYCFHeK88vWpvXCeNxyNOljTeS+Le9tG07sXaWYk9Co+g6Bruqyw1sFiTxM7+muHz65xvEMw2B1mrC2gHQe2njDD6pNOu4cjfXD7Su0iQsgGqeE0J9IQn2Tr7RUeJBA3+VVdtHZoXzmt5nU1WutbOBA3T1SPYam/6eenzPwrM2jfTge40V/wBUvDSW867Rge1OUx4U4LM0lxorqwYjTSutNPVUo1oBnQ0Ldsz876sWMaVE6UFHfws6ceg+6qrE4KtRdtA76BvWD2jzqop9nbWu4YwpzJxRvVg7wPsz4a7jVozgJaYSFbMDrpAPHuoHE4WeFGJ//KOlLhH4lGXzB8KsSrxtntbuZFU5PRswJ4Mzqco/Cx7CtDchcVlvZeDo/ilwEeRarPCmMGHZiz/WJ+qqLCjzJrF7Kxvorlm4TAW42b9lmKsfAk1akex5qpeV7/8AZ3/8v3ijbeIqt5VkthbqqJJUCBrMsvRUHluGxbIwdHKuNJXfB3gjcR1btKtU5T3lgn0bdZUhv4WEHuqtbZl4D+6udhRxH8NDX7bqYZQJ6THjpTyrU2OWrjejDqFxwe5Spo1OXekkXB+Bv90GsGq9Y7so8pnwpQo6O+ffJag9B/XpI1zDtRP+L0Va5bYcyGDgxOi6Hz08681j53eYmfKpsIhkgbzoNKHG8/XvDcFunj6o/mqG7y9sxAtXTP7I99ee9Hz891OMaa/M+PjUG2fl6nCy57XUeaiojy5Yjm2F1n1rjcBrw6x41kEtM3qgt2An2b/AUZZ2bebLlsXTGYQEbjBndHCi8XNzlniD6tuyvcze00E3LDFEBgbazO5Bw7Z6a61ycxjbsNc79PaKJHInGQo9GFAGpd1Gp37iYonFc/KTFsf79x1AKvsFA3dpXn9e7cP7zfPlWhHI64p/tL+FTtuSfCKX9WsMn95j07ERj4NNDwyrHdJk79dTvPfS20LGACZ4AST3Df5VsLNnZaQF9NiHG6SEWOvJrHd31ZYfa7WxGGsWbHWoUv8AiJJrOtTM7WpO+gPJ7YVzDBsXfGQZWVFbR3ZxAIG+B76aL0DmmmYy87tmuMzt0sSaF9HO5or5/wA2/wCyz8SOmc2LKziT/SjlvluNU9rDvvHO7Knt3SDqIry3sv8AjWp1Yth8/TUmBw3oiSZPZ76TDYwcaOzKw0Nbx/I54rXBK37RGpWesQaiuok+qPxfnQWJwRI0qqfDEGPf+dezHzZs9s3K8TfNRXmmnsdKhYk++vY4kE101G7H58q7U0BCmd9MbTrFMUmYohdRrQCXjx4UKwo91j50I6RUZtiOrzFBWXkqPCkc+22i3F0PAOuqMfZ2EnhVi9nroDGYUkSujDUHr+dKsSicVjDbwbowKsWKgHq9bugHxFY++3NUHo1/e1PtqTaOIckK6lI0MkkROoWeBgaDoFV17EZiTVt6kaXA8sryKFZUcAROoaBoJMwT11ZDlzuORgZk+rEdA53ZWEzHoNJDddQ49B/XxeKjvRG9oNSLy+UcF/0l9y15zlNdlNB6N+vdviqf6Q/lp369WjvVPwCvN8prslB6QeW1n7Fv8C1E/Lq3EejtsOg21jyNeeZK7JQbk8trY9TDYYdloe81G36QXHqW7a9iIPcaxWU12Q0Vrbn6QcUdzKOxU/loW5y4xh/xWHZp7IrOi2acLJonFpe5UYpt99/xN7zQF3aN1vWdj2mmDDmnDDGi8QtdY72J7zSKlFLhjUi4WnTibA4soIAEdgHmN9WVvGA9VVqYWibeFNRVnbxR6Z86nS/O8D56jVfbtEUQiHtrGsZvuLNWDkvqOHz3z7qLXEyNwYden83uqqC9op4Q8I9lcdfxsa/DpPksWr2lIkoy9a84d8VHbAHqv46e2g0uuvE9/wARRVvHn66hu0BvPf5159/w/wBVZuX2PTEsN+vnXO5JnKPKhhiLL71ynqJHtn21KMLa+0/t8689/i/JPS+L6oxt1MjWnBvOmua+y4GsgpgEaVLNMYeHDqNAoQVKimajRteupTc8fb1UCNu93X1VEOr5+eins80gE/PtoIXTzqNrNEHSma0FfiMKDoRPbVdd2Wn2RWhZZpjW6DNPssdFQNs6OFac2o4aUhtDooMm2A6qjbAnorXNhVpv0UcRQZA4I9FN+hdVa1sGBw0pv0ReihxlPoXVS/QeqtT9DHCk+iip0ZkYDqpwwPVWmGGHR3infRh0VRmlwFSrs81oPoo7KT0EUVSLs/qqZdnCrdbYqRUrIqF2f1VIuzx2VbBKcEFBVDAxwmpFw9WgSnZOmtCsFjqpRY6KsfQjhTTZoAwh6jThbXoiisnTS+j6D3GgEa2Rug0xutfnuoxrfV4UzJQC800nox1+NENbHEd/50z0A+0fKgPR6cTupa6iOQ08jSurqCIrPaPkUjmurqBM0+4/HrqQMDrxrq6ilJqMmK6uoHrcHGly9HhXV1AyaR1G+krqIbFKD8/O+urqBRTGt9FdXUUgWuyfPzvrq6gaUjdSjw9ldXUClZ6q4KR19VdXUCFAeo00qRXV1Ait0Uuf5+dK6uoHhqcLldXUDgR2Usntrq6g6aaUrq6gaSwppuCurqDqSPnSurqD/9k='},
            {marked: false, name: 'Mercedes amg', price: 18000, img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2'}
        ], visible: true,
        appTitle: 'Cars application'
    }

   handleMarked (name) {
       console.log(name)
       const cars = this.state.cars.concat()

       const car = cars.find(c => c.name === name)
        car.marked = !car.marked
       this.setState({cars})
   }

   toggleHandler () {
    this.setState({visible: !this.state.visible})
   }
    renderCars() {
        if (!this.state.visible) {
            return null
        }
        return  this.state.cars.map(car => {
            return (
                <Car
                    car={car}
                    key={car.name + Math.random()}
                    onMark={this.handleMarked.bind(this, car.name)}
                />
            )
        }) }

    titleChangeHandler(title) {
        if (title.trim() === '') {
            return
        }
        this.setState({
            appTitle: title
        })
}

    render() {
        const style = {
            marginRight: 20
        }
        return (
            <div className={"app"}>
                <h1>{this.state.appTitle}</h1>

                <button onClick={() => this.toggleHandler()} style={style}>Toggle</button>
                <input
                    type="text"
                    placeholder="Change title"
                    onChange={(event) => this.titleChangeHandler(event.target.value) }
                    value={this.state.appTitle}
                />
                <hr/>

                <div className={"list"}>

                    {this.renderCars()}

                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))


