var _= require('underscore'),
    GSON= require('gson');

module.exports= function (opts)
{
    return function (req,res,next)
    {
       if (Array.isArray(req.body)) // @TODO: better GSON detection
         req.body= GSON.decode(req.body);

       var send= _.bind(res.send,res);

       res.send= function (obj)
       {
           if (typeof obj=='object')
             send(GSON.encode(obj));
           else
             send(obj); 
       };

       next();
    };
};
