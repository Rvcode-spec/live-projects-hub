module.export = function ErrorHandling(){
        app.use((err, req, resp, next)=>{
        console.error('Unhandled error', err);
        resp.status(500).jeson({message: 'Server error'})
    })
}
