import { Request, Response } from "express"
import modelUsuario from '../models/usuario';

const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await modelUsuario.findAll();

  res.json({usuarios});
}

const getUsuario = async (req: Request, res: Response) => {
  
  const {id} = req.params;
  const usuario = await modelUsuario.findByPk(id);
  (!!usuario)
  ? 
  res.json({
    usuario
  })
  : 
  res.status(404).json({
    usuario: 'No existe este usuario'
  });
}

const postUsuario = async (req: Request, res: Response) => {
  const {body} = req;
  
  try {
    const emailExiste = await modelUsuario.findOne({
      where:{
        email: body.email
      }
    });
    if (emailExiste) {
      res.status(400).json({
        msg: 'ya existe un usuario con el email: ' + body.email
      });
      return;
    }
  
    const usuario = await modelUsuario.create(body);
    res.status(201).json({
      usuario
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Error de servidor'
    })
  }

}

const putUsuario = async (req: Request, res: Response) => {
  const {id} = req.params;
  const {body} = req;
  
  try {
    const usuario = await modelUsuario.findByPk(id);
    if (!usuario) {
      return res.status(400).json({
        msg: 'Este usuario nmo existe'
      });
    }
    await usuario.update(body);
    res.json({usuario});

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Error de servidor'
    })
  }
}

const deleteUsuario = async (req: Request, res: Response) => {
  const {id} = req.params;
  try {
    const usuario = await modelUsuario.findByPk(id);
    if (!usuario) {
      return res.status(400).json({
        msg: 'Este usuario nmo existe'
      });
    }
    //await usuario.destroy();
    await usuario.update({estado: false});
    res.json({usuario});

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Error de servidor'
    })
  }
}

export {
  getUsuario,
  getUsuarios,
  postUsuario,
  putUsuario,
  deleteUsuario
}
