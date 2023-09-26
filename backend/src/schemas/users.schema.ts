import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Role } from '../auth/enums/role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  'name': string;
  // @Prop()
  // 'user_name': string;
  @Prop({ required: true, select: false })
  'password': string;
  @Prop({ required: true, unique: true })
  'email': string;
  @Prop()
  'role': string;
  @Prop()
  'departamento': string;
  @Prop()
  'area': string;
  @Prop()
  'inicioActividad': Date;
  @Prop()
  'telefono': string;
  @Prop({ default: Role.User })
  'roles'?: Role[];
  async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password.toString(), this.password);
  }
}
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string,
): Promise<boolean> {
  const user = this as User;
  return bcrypt.compare(candidatePassword, user.password);
};
