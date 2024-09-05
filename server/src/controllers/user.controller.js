
exports.getPanelHome = (req, res) => {
    let bandera = true;
    res.render('user/pageHome', {bandera});
}