exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex("product")
  //   .del()
  //   .then(function () {
  // Inserts seed entries
  return knex("product").insert([
    {
      category_id: 5,
      productName: "Cheese Cheddar Processed",
      image:
        "http://umich.edu/rhoncus/dui.aspx?sed=purus&sagittis=aliquet&nam=at&congue=feugiat&risus=non&semper=pretium&porta=quis&volutpat=lectus&quam=suspendisse&pede=potenti&lobortis=in&ligula=eleifend&sit=quam&amet=a&eleifend=odio&pede=in&libero=hac&quis=habitasse&orci=platea&nullam=dictumst&molestie=maecenas&nibh=ut&in=massa&lectus=quis&pellentesque=augue&at=luctus&nulla=tincidunt&suspendisse=nulla&potenti=mollis",
      price: 34,
      shortDescription:
        "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      description:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      ratings: 1,
      stock: 53,
      brand: "Cheese - St. Paulin",
    },
    {
      category_id: 2,
      productName: "Salmon - Smoked, Sliced",
      image:
        "https://washington.edu/hendrerit/at.xml?duis=in&faucibus=felis&accumsan=eu&odio=sapien&curabitur=cursus&convallis=vestibulum&duis=proin&consequat=eu&dui=mi&nec=nulla&nisi=ac&volutpat=enim&eleifend=in&donec=tempor&ut=turpis&dolor=nec&morbi=euismod&vel=scelerisque&lectus=quam&in=turpis&quam=adipiscing&fringilla=lorem&rhoncus=vitae&mauris=mattis&enim=nibh&leo=ligula&rhoncus=nec&sed=sem&vestibulum=duis&sit=aliquam&amet=convallis&cursus=nunc&id=proin&turpis=at&integer=turpis",
      price: 63,
      shortDescription:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      description:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      ratings: 4,
      stock: 93,
      brand: "Table Cloth - 53x69 Colour",
    },
    {
      category_id: 2,
      productName: "Nestea - Iced Tea",
      image:
        "https://tumblr.com/ut/odio.js?posuere=vestibulum&metus=ante&vitae=ipsum&ipsum=primis&aliquam=in&non=faucibus&mauris=orci&morbi=luctus&non=et&lectus=ultrices&aliquam=posuere&sit=cubilia&amet=curae&diam=duis&in=faucibus&magna=accumsan&bibendum=odio&imperdiet=curabitur&nullam=convallis&orci=duis&pede=consequat&venenatis=dui&non=nec&sodales=nisi&sed=volutpat&tincidunt=eleifend&eu=donec&felis=ut&fusce=dolor&posuere=morbi&felis=vel&sed=lectus&lacus=in&morbi=quam&sem=fringilla&mauris=rhoncus&laoreet=mauris&ut=enim&rhoncus=leo&aliquet=rhoncus&pulvinar=sed&sed=vestibulum&nisl=sit&nunc=amet&rhoncus=cursus&dui=id&vel=turpis&sem=integer&sed=aliquet&sagittis=massa&nam=id&congue=lobortis&risus=convallis&semper=tortor&porta=risus&volutpat=dapibus&quam=augue&pede=vel&lobortis=accumsan&ligula=tellus&sit=nisi&amet=eu&eleifend=orci&pede=mauris&libero=lacinia&quis=sapien&orci=quis&nullam=libero&molestie=nullam&nibh=sit&in=amet&lectus=turpis&pellentesque=elementum&at=ligula&nulla=vehicula&suspendisse=consequat&potenti=morbi&cras=a&in=ipsum&purus=integer&eu=a&magna=nibh&vulputate=in&luctus=quis&cum=justo&sociis=maecenas&natoque=rhoncus&penatibus=aliquam&et=lacus&magnis=morbi&dis=quis&parturient=tortor&montes=id&nascetur=nulla&ridiculus=ultrices&mus=aliquet",
      price: 108,
      shortDescription:
        "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      description:
        "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      ratings: 4,
      stock: 65,
      brand: "Wine - Red, Concha Y Toro",
    },
    {
      category_id: 2,
      productName: "Bread - Multigrain, Loaf",
      image:
        "http://independent.co.uk/est/phasellus/sit.aspx?quisque=pede&id=justo&justo=eu&sit=massa&amet=donec&sapien=dapibus&dignissim=duis&vestibulum=at&vestibulum=velit&ante=eu&ipsum=est&primis=congue&in=elementum&faucibus=in&orci=hac&luctus=habitasse&et=platea&ultrices=dictumst&posuere=morbi&cubilia=vestibulum&curae=velit&nulla=id&dapibus=pretium&dolor=iaculis&vel=diam&est=erat&donec=fermentum&odio=justo&justo=nec&sollicitudin=condimentum&ut=neque&suscipit=sapien&a=placerat&feugiat=ante&et=nulla&eros=justo&vestibulum=aliquam&ac=quis",
      price: 151,
      shortDescription:
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      description:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      ratings: 5,
      stock: 54,
      brand: "Beef - Striploin Aa",
    },
    {
      category_id: 4,
      productName: "Croissants Thaw And Serve",
      image:
        "https://infoseek.co.jp/volutpat/sapien.xml?odio=quam&consequat=pharetra&varius=magna&integer=ac&ac=consequat&leo=metus&pellentesque=sapien&ultrices=ut&mattis=nunc&odio=vestibulum&donec=ante&vitae=ipsum&nisi=primis&nam=in&ultrices=faucibus&libero=orci",
      price: 171,
      shortDescription:
        "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      description:
        "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
      ratings: 3,
      stock: 49,
      brand: "Brandy - Bar",
    },
    {
      category_id: 1,
      productName: "Pastry - Mini French Pastries",
      image:
        "http://histats.com/lectus/vestibulum/quam/sapien/varius.xml?aliquam=posuere&lacus=cubilia&morbi=curae&quis=donec&tortor=pharetra&id=magna&nulla=vestibulum&ultrices=aliquet&aliquet=ultrices&maecenas=erat&leo=tortor&odio=sollicitudin&condimentum=mi&id=sit&luctus=amet&nec=lobortis&molestie=sapien&sed=sapien&justo=non&pellentesque=mi&viverra=integer&pede=ac&ac=neque&diam=duis&cras=bibendum&pellentesque=morbi&volutpat=non&dui=quam&maecenas=nec&tristique=dui&est=luctus&et=rutrum&tempus=nulla&semper=tellus&est=in&quam=sagittis&pharetra=dui&magna=vel&ac=nisl&consequat=duis&metus=ac&sapien=nibh&ut=fusce&nunc=lacus&vestibulum=purus&ante=aliquet&ipsum=at&primis=feugiat&in=non&faucibus=pretium&orci=quis&luctus=lectus&et=suspendisse&ultrices=potenti&posuere=in",
      price: 65,
      shortDescription:
        "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      description:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      ratings: 4,
      stock: 35,
      brand: "Bread - Ciabatta Buns",
    },
    {
      category_id: 6,
      productName: "Dried Apple",
      image:
        "https://sina.com.cn/eget/tempus/vel.xml?etiam=justo&justo=in&etiam=blandit&pretium=ultrices&iaculis=enim&justo=lorem&in=ipsum&hac=dolor&habitasse=sit&platea=amet&dictumst=consectetuer&etiam=adipiscing&faucibus=elit&cursus=proin&urna=interdum&ut=mauris&tellus=non&nulla=ligula&ut=pellentesque&erat=ultrices&id=phasellus&mauris=id&vulputate=sapien&elementum=in&nullam=sapien&varius=iaculis&nulla=congue&facilisi=vivamus&cras=metus&non=arcu&velit=adipiscing&nec=molestie&nisi=hendrerit&vulputate=at&nonummy=vulputate&maecenas=vitae&tincidunt=nisl&lacus=aenean&at=lectus&velit=pellentesque&vivamus=eget&vel=nunc&nulla=donec&eget=quis&eros=orci&elementum=eget&pellentesque=orci&quisque=vehicula&porta=condimentum&volutpat=curabitur&erat=in&quisque=libero&erat=ut&eros=massa&viverra=volutpat&eget=convallis&congue=morbi&eget=odio&semper=odio&rutrum=elementum&nulla=eu&nunc=interdum&purus=eu&phasellus=tincidunt&in=in&felis=leo&donec=maecenas&semper=pulvinar&sapien=lobortis&a=est&libero=phasellus&nam=sit&dui=amet&proin=erat&leo=nulla",
      price: 616,
      shortDescription:
        "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      description:
        "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      ratings: 3,
      stock: 16,
      brand: "Quail - Eggs, Fresh",
    },
    {
      category_id: 2,
      productName: "Bread - Ciabatta Buns",
      image:
        "https://fotki.com/tortor/id/nulla/ultrices/aliquet/maecenas/leo.png?eget=sapien&eros=dignissim&elementum=vestibulum&pellentesque=vestibulum&quisque=ante&porta=ipsum&volutpat=primis&erat=in&quisque=faucibus&erat=orci&eros=luctus&viverra=et&eget=ultrices&congue=posuere&eget=cubilia&semper=curae&rutrum=nulla&nulla=dapibus&nunc=dolor&purus=vel&phasellus=est&in=donec&felis=odio&donec=justo&semper=sollicitudin&sapien=ut&a=suscipit&libero=a&nam=feugiat&dui=et&proin=eros&leo=vestibulum&odio=ac&porttitor=est&id=lacinia&consequat=nisi&in=venenatis&consequat=tristique&ut=fusce&nulla=congue&sed=diam&accumsan=id&felis=ornare&ut=imperdiet&at=sapien&dolor=urna&quis=pretium&odio=nisl&consequat=ut",
      price: 212,
      shortDescription:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      description:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      ratings: 5,
      stock: 16,
      brand: "Wine - Zonnebloem Pinotage",
    },
    {
      category_id: 6,
      productName: "Calypso - Pineapple Passion",
      image:
        "https://miitbeian.gov.cn/morbi/non/lectus/aliquam/sit/amet/diam.js?orci=sit&eget=amet&orci=sapien&vehicula=dignissim&condimentum=vestibulum&curabitur=vestibulum&in=ante&libero=ipsum&ut=primis&massa=in&volutpat=faucibus&convallis=orci&morbi=luctus&odio=et&odio=ultrices&elementum=posuere&eu=cubilia&interdum=curae&eu=nulla&tincidunt=dapibus&in=dolor&leo=vel&maecenas=est&pulvinar=donec&lobortis=odio&est=justo&phasellus=sollicitudin&sit=ut&amet=suscipit&erat=a&nulla=feugiat&tempus=et&vivamus=eros&in=vestibulum&felis=ac&eu=est&sapien=lacinia&cursus=nisi&vestibulum=venenatis&proin=tristique&eu=fusce&mi=congue&nulla=diam&ac=id&enim=ornare&in=imperdiet&tempor=sapien&turpis=urna&nec=pretium&euismod=nisl&scelerisque=ut&quam=volutpat&turpis=sapien&adipiscing=arcu&lorem=sed&vitae=augue&mattis=aliquam&nibh=erat&ligula=volutpat&nec=in&sem=congue&duis=etiam&aliquam=justo&convallis=etiam&nunc=pretium&proin=iaculis&at=justo&turpis=in&a=hac",
      price: 558,
      shortDescription:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
      description:
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      ratings: 2,
      stock: 87,
      brand: "Chocolate - Milk Coating",
    },
    {
      category_id: 2,
      productName: "Whmis Spray Bottle Graduated",
      image:
        "http://irs.gov/mauris/vulputate/elementum/nullam/varius/nulla/facilisi.jsp?eu=aliquam&interdum=quis&eu=turpis&tincidunt=eget&in=elit&leo=sodales&maecenas=scelerisque&pulvinar=mauris&lobortis=sit&est=amet&phasellus=eros&sit=suspendisse&amet=accumsan&erat=tortor&nulla=quis&tempus=turpis&vivamus=sed&in=ante&felis=vivamus&eu=tortor&sapien=duis&cursus=mattis&vestibulum=egestas&proin=metus&eu=aenean&mi=fermentum&nulla=donec&ac=ut&enim=mauris&in=eget&tempor=massa&turpis=tempor&nec=convallis&euismod=nulla&scelerisque=neque&quam=libero",
      price: 936,
      shortDescription:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      description:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      ratings: 3,
      stock: 17,
      brand: "Cheese - Cheddarsliced",
    },
    {
      category_id: 2,
      productName: "Tomatoes Tear Drop Yellow",
      image:
        "https://ucla.edu/vivamus/metus/arcu.png?justo=non&sollicitudin=velit&ut=nec&suscipit=nisi&a=vulputate&feugiat=nonummy&et=maecenas&eros=tincidunt&vestibulum=lacus&ac=at&est=velit&lacinia=vivamus&nisi=vel&venenatis=nulla&tristique=eget&fusce=eros&congue=elementum&diam=pellentesque&id=quisque&ornare=porta&imperdiet=volutpat",
      price: 388,
      shortDescription:
        "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      description:
        "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      ratings: 3,
      stock: 25,
      brand: "Muffin Chocolate Individual Wrap",
    },
    {
      category_id: 6,
      productName: "English Muffin",
      image:
        "https://intel.com/lacinia/aenean/sit.json?pellentesque=donec&quisque=pharetra&porta=magna&volutpat=vestibulum&erat=aliquet&quisque=ultrices&erat=erat&eros=tortor&viverra=sollicitudin&eget=mi&congue=sit&eget=amet&semper=lobortis&rutrum=sapien&nulla=sapien&nunc=non&purus=mi&phasellus=integer&in=ac&felis=neque&donec=duis&semper=bibendum&sapien=morbi&a=non&libero=quam&nam=nec&dui=dui&proin=luctus&leo=rutrum&odio=nulla&porttitor=tellus&id=in&consequat=sagittis&in=dui&consequat=vel&ut=nisl&nulla=duis&sed=ac&accumsan=nibh&felis=fusce&ut=lacus&at=purus&dolor=aliquet&quis=at&odio=feugiat&consequat=non&varius=pretium&integer=quis&ac=lectus&leo=suspendisse&pellentesque=potenti&ultrices=in&mattis=eleifend&odio=quam&donec=a&vitae=odio&nisi=in&nam=hac&ultrices=habitasse&libero=platea&non=dictumst&mattis=maecenas&pulvinar=ut&nulla=massa&pede=quis&ullamcorper=augue&augue=luctus&a=tincidunt&suscipit=nulla&nulla=mollis&elit=molestie&ac=lorem&nulla=quisque&sed=ut&vel=erat&enim=curabitur&sit=gravida&amet=nisi&nunc=at&viverra=nibh",
      price: 624,
      shortDescription:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      description:
        "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      ratings: 3,
      stock: 82,
      brand: "Beef Wellington",
    },
    {
      category_id: 2,
      productName: "Flour - Rye",
      image:
        "https://soup.io/feugiat.png?curabitur=diam&gravida=vitae&nisi=quam&at=suspendisse&nibh=potenti&in=nullam&hac=porttitor&habitasse=lacus&platea=at&dictumst=turpis&aliquam=donec&augue=posuere&quam=metus&sollicitudin=vitae&vitae=ipsum&consectetuer=aliquam&eget=non&rutrum=mauris&at=morbi&lorem=non",
      price: 946,
      shortDescription:
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      description:
        "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      ratings: 2,
      stock: 4,
      brand: "Shrimp - Black Tiger 16/20",
    },
    {
      category_id: 6,
      productName: "Arrowroot",
      image:
        "http://microsoft.com/felis/donec.xml?in=massa&leo=id&maecenas=lobortis&pulvinar=convallis&lobortis=tortor&est=risus&phasellus=dapibus&sit=augue&amet=vel&erat=accumsan&nulla=tellus&tempus=nisi&vivamus=eu&in=orci&felis=mauris&eu=lacinia&sapien=sapien&cursus=quis&vestibulum=libero&proin=nullam&eu=sit&mi=amet&nulla=turpis&ac=elementum&enim=ligula&in=vehicula&tempor=consequat&turpis=morbi",
      price: 252,
      shortDescription:
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      description:
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      ratings: 2,
      stock: 39,
      brand: "Bread - Granary Small Pull",
    },
    {
      category_id: 4,
      productName: "Truffle Cups - Red",
      image:
        "http://thetimes.co.uk/magna/vestibulum/aliquet/ultrices.xml?congue=pellentesque&elementum=eget&in=nunc&hac=donec&habitasse=quis&platea=orci&dictumst=eget&morbi=orci&vestibulum=vehicula&velit=condimentum&id=curabitur&pretium=in&iaculis=libero&diam=ut&erat=massa&fermentum=volutpat&justo=convallis&nec=morbi&condimentum=odio&neque=odio&sapien=elementum&placerat=eu&ante=interdum&nulla=eu&justo=tincidunt&aliquam=in&quis=leo&turpis=maecenas&eget=pulvinar&elit=lobortis&sodales=est&scelerisque=phasellus&mauris=sit&sit=amet&amet=erat&eros=nulla&suspendisse=tempus&accumsan=vivamus&tortor=in&quis=felis&turpis=eu&sed=sapien&ante=cursus&vivamus=vestibulum&tortor=proin&duis=eu&mattis=mi&egestas=nulla&metus=ac&aenean=enim&fermentum=in&donec=tempor&ut=turpis&mauris=nec&eget=euismod&massa=scelerisque&tempor=quam&convallis=turpis&nulla=adipiscing&neque=lorem&libero=vitae&convallis=mattis&eget=nibh",
      price: 16,
      shortDescription:
        "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      description:
        "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      ratings: 5,
      stock: 57,
      brand: "Thyme - Lemon, Fresh",
    },
    {
      category_id: 2,
      productName: "Beer - Camerons Cream Ale",
      image:
        "http://github.com/iaculis/congue/vivamus/metus/arcu/adipiscing.xml?amet=ridiculus&sapien=mus&dignissim=etiam&vestibulum=vel&vestibulum=augue&ante=vestibulum&ipsum=rutrum&primis=rutrum&in=neque&faucibus=aenean&orci=auctor&luctus=gravida&et=sem&ultrices=praesent&posuere=id&cubilia=massa&curae=id&nulla=nisl&dapibus=venenatis",
      price: 882,
      shortDescription:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      description:
        "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      ratings: 4,
      stock: 48,
      brand: "Roe - Flying Fish",
    },
    {
      category_id: 5,
      productName: "Lobster - Baby, Boiled",
      image:
        "https://devhub.com/eu/est/congue.jsp?vulputate=eu&ut=nibh&ultrices=quisque&vel=id&augue=justo&vestibulum=sit&ante=amet&ipsum=sapien&primis=dignissim&in=vestibulum&faucibus=vestibulum&orci=ante&luctus=ipsum&et=primis&ultrices=in&posuere=faucibus&cubilia=orci&curae=luctus&donec=et&pharetra=ultrices&magna=posuere&vestibulum=cubilia&aliquet=curae&ultrices=nulla",
      price: 117,
      shortDescription:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      description:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      ratings: 5,
      stock: 7,
      brand: "Wine - Alicanca Vinho Verde",
    },
    {
      category_id: 3,
      productName: "Vinegar - Cider",
      image:
        "http://xrea.com/purus/eu/magna/vulputate/luctus/cum.json?dignissim=at&vestibulum=velit&vestibulum=eu&ante=est&ipsum=congue&primis=elementum&in=in&faucibus=hac&orci=habitasse&luctus=platea&et=dictumst&ultrices=morbi&posuere=vestibulum&cubilia=velit&curae=id&nulla=pretium&dapibus=iaculis&dolor=diam&vel=erat&est=fermentum&donec=justo&odio=nec&justo=condimentum&sollicitudin=neque&ut=sapien&suscipit=placerat&a=ante&feugiat=nulla&et=justo&eros=aliquam&vestibulum=quis&ac=turpis&est=eget&lacinia=elit&nisi=sodales&venenatis=scelerisque&tristique=mauris&fusce=sit&congue=amet&diam=eros&id=suspendisse&ornare=accumsan&imperdiet=tortor&sapien=quis&urna=turpis&pretium=sed&nisl=ante&ut=vivamus&volutpat=tortor&sapien=duis&arcu=mattis&sed=egestas&augue=metus&aliquam=aenean&erat=fermentum&volutpat=donec&in=ut&congue=mauris&etiam=eget&justo=massa&etiam=tempor&pretium=convallis&iaculis=nulla&justo=neque&in=libero&hac=convallis&habitasse=eget&platea=eleifend&dictumst=luctus&etiam=ultricies&faucibus=eu&cursus=nibh&urna=quisque&ut=id&tellus=justo&nulla=sit&ut=amet&erat=sapien&id=dignissim&mauris=vestibulum&vulputate=vestibulum&elementum=ante&nullam=ipsum&varius=primis&nulla=in&facilisi=faucibus&cras=orci&non=luctus",
      price: 552,
      shortDescription:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      description:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      ratings: 2,
      stock: 63,
      brand: "Fond - Neutral",
    },
    {
      category_id: 2,
      productName: "Beef - Kindney, Whole",
      image:
        "http://ihg.com/libero/convallis.png?diam=velit&erat=donec&fermentum=diam&justo=neque&nec=vestibulum&condimentum=eget&neque=vulputate&sapien=ut&placerat=ultrices&ante=vel&nulla=augue&justo=vestibulum&aliquam=ante&quis=ipsum&turpis=primis&eget=in&elit=faucibus&sodales=orci&scelerisque=luctus&mauris=et&sit=ultrices&amet=posuere&eros=cubilia&suspendisse=curae&accumsan=donec&tortor=pharetra&quis=magna&turpis=vestibulum&sed=aliquet&ante=ultrices&vivamus=erat&tortor=tortor&duis=sollicitudin&mattis=mi&egestas=sit&metus=amet&aenean=lobortis&fermentum=sapien&donec=sapien&ut=non&mauris=mi&eget=integer&massa=ac&tempor=neque&convallis=duis&nulla=bibendum&neque=morbi&libero=non&convallis=quam&eget=nec&eleifend=dui&luctus=luctus&ultricies=rutrum&eu=nulla&nibh=tellus&quisque=in&id=sagittis&justo=dui&sit=vel&amet=nisl&sapien=duis&dignissim=ac&vestibulum=nibh&vestibulum=fusce&ante=lacus&ipsum=purus&primis=aliquet&in=at&faucibus=feugiat&orci=non&luctus=pretium&et=quis&ultrices=lectus&posuere=suspendisse&cubilia=potenti&curae=in&nulla=eleifend&dapibus=quam&dolor=a&vel=odio&est=in&donec=hac&odio=habitasse&justo=platea&sollicitudin=dictumst&ut=maecenas&suscipit=ut&a=massa&feugiat=quis&et=augue&eros=luctus&vestibulum=tincidunt&ac=nulla&est=mollis&lacinia=molestie",
      price: 234,
      shortDescription:
        "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      description:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      ratings: 5,
      stock: 94,
      brand: "Fish - Artic Char, Cold Smoked",
    },
    {
      category_id: 2,
      productName: "Napkin White",
      image:
        "http://mail.ru/sapien/cum/sociis/natoque/penatibus/et/magnis.html?accumsan=nunc&felis=vestibulum&ut=ante&at=ipsum&dolor=primis&quis=in&odio=faucibus&consequat=orci&varius=luctus&integer=et&ac=ultrices&leo=posuere&pellentesque=cubilia&ultrices=curae&mattis=mauris&odio=viverra&donec=diam&vitae=vitae&nisi=quam&nam=suspendisse&ultrices=potenti&libero=nullam&non=porttitor&mattis=lacus&pulvinar=at&nulla=turpis&pede=donec&ullamcorper=posuere&augue=metus&a=vitae&suscipit=ipsum&nulla=aliquam&elit=non&ac=mauris&nulla=morbi&sed=non&vel=lectus&enim=aliquam&sit=sit&amet=amet&nunc=diam&viverra=in&dapibus=magna",
      price: 395,
      shortDescription:
        "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      description:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      ratings: 1,
      stock: 7,
      brand: "Iced Tea - Lemon, 340ml",
    },
    {
      category_id: 1,
      productName: "Cheese - Brie",
      image:
        "http://reuters.com/primis/in/faucibus.jpg?nullam=enim&molestie=in&nibh=tempor&in=turpis&lectus=nec&pellentesque=euismod&at=scelerisque&nulla=quam&suspendisse=turpis&potenti=adipiscing&cras=lorem&in=vitae&purus=mattis&eu=nibh&magna=ligula&vulputate=nec&luctus=sem&cum=duis&sociis=aliquam&natoque=convallis&penatibus=nunc&et=proin&magnis=at&dis=turpis&parturient=a&montes=pede&nascetur=posuere&ridiculus=nonummy&mus=integer&vivamus=non&vestibulum=velit&sagittis=donec&sapien=diam&cum=neque&sociis=vestibulum&natoque=eget&penatibus=vulputate&et=ut&magnis=ultrices&dis=vel&parturient=augue&montes=vestibulum&nascetur=ante&ridiculus=ipsum&mus=primis&etiam=in&vel=faucibus&augue=orci&vestibulum=luctus&rutrum=et&rutrum=ultrices&neque=posuere&aenean=cubilia&auctor=curae&gravida=donec&sem=pharetra&praesent=magna&id=vestibulum&massa=aliquet&id=ultrices&nisl=erat&venenatis=tortor&lacinia=sollicitudin&aenean=mi&sit=sit&amet=amet&justo=lobortis&morbi=sapien&ut=sapien&odio=non&cras=mi&mi=integer&pede=ac&malesuada=neque&in=duis",
      price: 351,
      shortDescription:
        "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      description:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      ratings: 1,
      stock: 52,
      brand: "Yams",
    },
    {
      category_id: 1,
      productName: "Pepper - Green, Chili",
      image:
        "http://google.com.br/quisque.html?cras=lectus&pellentesque=aliquam&volutpat=sit&dui=amet&maecenas=diam&tristique=in&est=magna&et=bibendum&tempus=imperdiet&semper=nullam&est=orci&quam=pede&pharetra=venenatis&magna=non&ac=sodales&consequat=sed&metus=tincidunt&sapien=eu&ut=felis&nunc=fusce&vestibulum=posuere&ante=felis&ipsum=sed&primis=lacus&in=morbi&faucibus=sem&orci=mauris&luctus=laoreet&et=ut&ultrices=rhoncus&posuere=aliquet&cubilia=pulvinar&curae=sed&mauris=nisl&viverra=nunc&diam=rhoncus",
      price: 376,
      shortDescription:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      description:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
      ratings: 5,
      stock: 61,
      brand: "Mix - Cappucino Cocktail",
    },
    {
      category_id: 5,
      productName: "Wine - Gewurztraminer Pierre",
      image:
        "https://webmd.com/aliquam/convallis/nunc/proin/at.json?est=odio&phasellus=condimentum&sit=id&amet=luctus&erat=nec&nulla=molestie&tempus=sed&vivamus=justo&in=pellentesque&felis=viverra&eu=pede&sapien=ac&cursus=diam&vestibulum=cras&proin=pellentesque&eu=volutpat&mi=dui&nulla=maecenas&ac=tristique&enim=est&in=et&tempor=tempus&turpis=semper&nec=est&euismod=quam&scelerisque=pharetra&quam=magna&turpis=ac&adipiscing=consequat&lorem=metus&vitae=sapien&mattis=ut&nibh=nunc&ligula=vestibulum&nec=ante&sem=ipsum&duis=primis&aliquam=in&convallis=faucibus&nunc=orci&proin=luctus&at=et&turpis=ultrices&a=posuere&pede=cubilia&posuere=curae&nonummy=mauris&integer=viverra&non=diam&velit=vitae&donec=quam&diam=suspendisse&neque=potenti&vestibulum=nullam&eget=porttitor&vulputate=lacus&ut=at&ultrices=turpis&vel=donec&augue=posuere&vestibulum=metus&ante=vitae&ipsum=ipsum&primis=aliquam&in=non&faucibus=mauris&orci=morbi&luctus=non&et=lectus&ultrices=aliquam&posuere=sit&cubilia=amet&curae=diam&donec=in&pharetra=magna&magna=bibendum&vestibulum=imperdiet&aliquet=nullam&ultrices=orci&erat=pede&tortor=venenatis&sollicitudin=non&mi=sodales&sit=sed&amet=tincidunt&lobortis=eu&sapien=felis&sapien=fusce",
      price: 385,
      shortDescription:
        "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      description:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      ratings: 1,
      stock: 1,
      brand: "Bagel - Whole White Sesame",
    },
    {
      category_id: 1,
      productName: "Lobster - Tail, 3 - 4 Oz",
      image:
        "http://ca.gov/aenean/sit/amet/justo/morbi/ut.jpg?donec=primis&dapibus=in&duis=faucibus&at=orci&velit=luctus&eu=et&est=ultrices&congue=posuere&elementum=cubilia&in=curae&hac=mauris&habitasse=viverra&platea=diam&dictumst=vitae&morbi=quam&vestibulum=suspendisse&velit=potenti&id=nullam&pretium=porttitor&iaculis=lacus&diam=at&erat=turpis&fermentum=donec&justo=posuere&nec=metus&condimentum=vitae&neque=ipsum&sapien=aliquam&placerat=non&ante=mauris&nulla=morbi&justo=non&aliquam=lectus&quis=aliquam&turpis=sit&eget=amet&elit=diam&sodales=in&scelerisque=magna&mauris=bibendum&sit=imperdiet&amet=nullam&eros=orci&suspendisse=pede&accumsan=venenatis&tortor=non&quis=sodales&turpis=sed&sed=tincidunt&ante=eu&vivamus=felis&tortor=fusce&duis=posuere&mattis=felis&egestas=sed&metus=lacus&aenean=morbi&fermentum=sem&donec=mauris&ut=laoreet&mauris=ut&eget=rhoncus&massa=aliquet&tempor=pulvinar&convallis=sed&nulla=nisl&neque=nunc&libero=rhoncus&convallis=dui&eget=vel&eleifend=sem&luctus=sed&ultricies=sagittis",
      price: 671,
      shortDescription:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      description:
        "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      ratings: 5,
      stock: 44,
      brand: "Sour Puss Raspberry",
    },
    {
      category_id: 5,
      productName: "Beef - Shank",
      image:
        "https://psu.edu/sem/fusce.json?eget=congue&nunc=eget&donec=semper&quis=rutrum&orci=nulla&eget=nunc&orci=purus&vehicula=phasellus&condimentum=in",
      price: 620,
      shortDescription:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      description:
        "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      ratings: 5,
      stock: 16,
      brand: "Cherries - Bing, Canned",
    },
    {
      category_id: 2,
      productName: "Tamarillo",
      image:
        "http://etsy.com/platea.html?ante=molestie&ipsum=nibh&primis=in&in=lectus&faucibus=pellentesque&orci=at&luctus=nulla&et=suspendisse&ultrices=potenti&posuere=cras&cubilia=in&curae=purus&duis=eu&faucibus=magna&accumsan=vulputate&odio=luctus&curabitur=cum&convallis=sociis&duis=natoque&consequat=penatibus&dui=et&nec=magnis&nisi=dis&volutpat=parturient&eleifend=montes&donec=nascetur&ut=ridiculus&dolor=mus&morbi=vivamus&vel=vestibulum&lectus=sagittis&in=sapien&quam=cum&fringilla=sociis&rhoncus=natoque&mauris=penatibus&enim=et&leo=magnis&rhoncus=dis&sed=parturient&vestibulum=montes&sit=nascetur&amet=ridiculus&cursus=mus&id=etiam&turpis=vel&integer=augue&aliquet=vestibulum&massa=rutrum&id=rutrum&lobortis=neque&convallis=aenean&tortor=auctor&risus=gravida&dapibus=sem&augue=praesent&vel=id&accumsan=massa&tellus=id&nisi=nisl&eu=venenatis&orci=lacinia&mauris=aenean&lacinia=sit&sapien=amet&quis=justo",
      price: 355,
      shortDescription:
        "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      description:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      ratings: 4,
      stock: 8,
      brand: "Beer - Heinekin",
    },
    {
      category_id: 3,
      productName: "Food Colouring - Green",
      image:
        "https://wikipedia.org/vel/augue/vestibulum/ante/ipsum.xml?erat=lacus&curabitur=morbi&gravida=sem&nisi=mauris&at=laoreet&nibh=ut&in=rhoncus&hac=aliquet&habitasse=pulvinar&platea=sed&dictumst=nisl&aliquam=nunc&augue=rhoncus&quam=dui&sollicitudin=vel&vitae=sem&consectetuer=sed&eget=sagittis&rutrum=nam&at=congue&lorem=risus&integer=semper&tincidunt=porta&ante=volutpat&vel=quam&ipsum=pede&praesent=lobortis&blandit=ligula&lacinia=sit&erat=amet&vestibulum=eleifend&sed=pede&magna=libero&at=quis&nunc=orci&commodo=nullam&placerat=molestie&praesent=nibh&blandit=in&nam=lectus&nulla=pellentesque&integer=at&pede=nulla&justo=suspendisse&lacinia=potenti&eget=cras&tincidunt=in&eget=purus&tempus=eu&vel=magna&pede=vulputate&morbi=luctus&porttitor=cum&lorem=sociis&id=natoque&ligula=penatibus&suspendisse=et&ornare=magnis&consequat=dis&lectus=parturient&in=montes&est=nascetur",
      price: 496,
      shortDescription:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      description:
        "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
      ratings: 5,
      stock: 5,
      brand: "Cardamon Seed / Pod",
    },
    {
      category_id: 6,
      productName: "Ecolab - Lime - A - Way 4/4 L",
      image:
        "https://issuu.com/sagittis/dui/vel/nisl/duis/ac.jsp?ac=sed&neque=tristique&duis=in&bibendum=tempus&morbi=sit&non=amet&quam=sem&nec=fusce&dui=consequat&luctus=nulla&rutrum=nisl&nulla=nunc&tellus=nisl&in=duis&sagittis=bibendum&dui=felis&vel=sed&nisl=interdum&duis=venenatis&ac=turpis&nibh=enim&fusce=blandit&lacus=mi&purus=in&aliquet=porttitor&at=pede&feugiat=justo&non=eu&pretium=massa&quis=donec&lectus=dapibus&suspendisse=duis&potenti=at&in=velit&eleifend=eu&quam=est&a=congue&odio=elementum&in=in&hac=hac&habitasse=habitasse&platea=platea&dictumst=dictumst&maecenas=morbi&ut=vestibulum&massa=velit&quis=id&augue=pretium&luctus=iaculis&tincidunt=diam&nulla=erat&mollis=fermentum&molestie=justo&lorem=nec&quisque=condimentum&ut=neque&erat=sapien&curabitur=placerat&gravida=ante&nisi=nulla&at=justo&nibh=aliquam&in=quis&hac=turpis&habitasse=eget&platea=elit&dictumst=sodales&aliquam=scelerisque&augue=mauris&quam=sit&sollicitudin=amet&vitae=eros&consectetuer=suspendisse&eget=accumsan&rutrum=tortor&at=quis",
      price: 326,
      shortDescription:
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      ratings: 3,
      stock: 2,
      brand: "Apple - Royal Gala",
    },
    {
      category_id: 2,
      productName: "Containter - 3oz Microwave Rect.",
      image:
        "http://delicious.com/ultrices/mattis/odio.html?vestibulum=sit&ante=amet&ipsum=diam&primis=in&in=magna&faucibus=bibendum&orci=imperdiet&luctus=nullam&et=orci&ultrices=pede&posuere=venenatis&cubilia=non&curae=sodales&mauris=sed&viverra=tincidunt&diam=eu&vitae=felis&quam=fusce&suspendisse=posuere&potenti=felis&nullam=sed&porttitor=lacus&lacus=morbi&at=sem&turpis=mauris&donec=laoreet&posuere=ut&metus=rhoncus&vitae=aliquet&ipsum=pulvinar&aliquam=sed&non=nisl&mauris=nunc&morbi=rhoncus&non=dui&lectus=vel&aliquam=sem&sit=sed&amet=sagittis&diam=nam&in=congue&magna=risus&bibendum=semper&imperdiet=porta&nullam=volutpat&orci=quam&pede=pede&venenatis=lobortis&non=ligula&sodales=sit&sed=amet&tincidunt=eleifend&eu=pede&felis=libero&fusce=quis&posuere=orci&felis=nullam&sed=molestie&lacus=nibh&morbi=in&sem=lectus&mauris=pellentesque&laoreet=at&ut=nulla&rhoncus=suspendisse&aliquet=potenti&pulvinar=cras&sed=in&nisl=purus&nunc=eu&rhoncus=magna&dui=vulputate&vel=luctus&sem=cum&sed=sociis&sagittis=natoque&nam=penatibus&congue=et&risus=magnis&semper=dis&porta=parturient&volutpat=montes&quam=nascetur&pede=ridiculus&lobortis=mus&ligula=vivamus&sit=vestibulum&amet=sagittis",
      price: 780,
      shortDescription:
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      description:
        "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      ratings: 1,
      stock: 35,
      brand: "Coffee - 10oz Cup 92961",
    },
    {
      category_id: 2,
      productName: "Onions - Cooking",
      image:
        "http://epa.gov/sapien.xml?enim=volutpat&leo=dui&rhoncus=maecenas&sed=tristique&vestibulum=est&sit=et&amet=tempus&cursus=semper&id=est&turpis=quam&integer=pharetra&aliquet=magna&massa=ac&id=consequat&lobortis=metus&convallis=sapien&tortor=ut&risus=nunc&dapibus=vestibulum&augue=ante&vel=ipsum&accumsan=primis&tellus=in&nisi=faucibus&eu=orci&orci=luctus&mauris=et&lacinia=ultrices&sapien=posuere&quis=cubilia&libero=curae&nullam=mauris&sit=viverra&amet=diam&turpis=vitae&elementum=quam&ligula=suspendisse&vehicula=potenti&consequat=nullam",
      price: 679,
      shortDescription:
        "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      description:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      ratings: 5,
      stock: 64,
      brand: "Dooleys Toffee",
    },
  ]);
  // });
};
