import datatabase from '../../src/database';

export default function truncate() {
  return Promise.all(
    Object.keys(datatabase.connection.models).map(key =>
      datatabase.connection.models[key].destroy({ truncate: true, force: true })
    )
  );
}
